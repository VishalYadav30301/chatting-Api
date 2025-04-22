import {
  Injectable,
  NotFoundException,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
import { LoginUserDto } from '../auth/dto/login-user.dto';
import { RegisterUserDto } from '../auth/dto/register-user.dto';
import * as bcrypt from 'bcrypt';
import { InjectModel } from '@nestjs/mongoose';


@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService
  ) {}

  async validateUser(email:string, password: string): Promise<any> {
    const user = await this.usersService.findOne(email);
    if (!user) {
      throw new NotFoundException('User not found');
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      throw new HttpException('Invalid credentials', HttpStatus.UNAUTHORIZED);
    }
    return user;
  }

  // Validate user credentials
  async login(loginUserDto: LoginUserDto) {
    const user = await this.validateUser(
      loginUserDto.email,
      loginUserDto.password,
    );
    if (!user) {
      throw new HttpException('Invalid login attempt', HttpStatus.UNAUTHORIZED);
  }
   
      const payload = {
        email: user.email,
        sub: user._id,
      };
      return {
        message: 'Login successful. Use the provided access token to authenticate further requests.',
        access_token: this.jwtService.sign(payload),
      };
    }


  // Register a new user
  async register(registerUserDto: RegisterUserDto) {
    const user = await this.usersService.findOne(registerUserDto.email);
    if (user) {
      throw new HttpException(
        'User with this email exist',
        HttpStatus.BAD_REQUEST,
      );
    }
    const saltOrRounds = 10;
    const hash = await bcrypt.hash(registerUserDto.password, saltOrRounds);
    const data = {...registerUserDto, password: hash};
    const createOne = await this.usersService.createOne(data);
    if (!createOne) { 
      throw new HttpException(
        'User registration failed',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    } else {
      return {
        message: 'User registered successfully',
        user: {
          name: createOne.name,
          email: createOne.email,
        },
      };
    }
  }
}
