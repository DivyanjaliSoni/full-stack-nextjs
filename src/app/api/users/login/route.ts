import connect from "@/dbConfig/dbConfig";
import User from "@/models/userModal";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

connect();

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();

    const { username, password } = reqBody;

    const user = await User.findOne({ username });
    if (user) {
      const validPassword = bcryptjs.compare(password, user.password);
      if (!validPassword)
        return NextResponse.json(
          { message: "password is incorrect" },
          { status: 400 }
        );
    } 
    else {
      return NextResponse.json(
        { message: "user does not exist" },
        { status: 400 }
      );
    }

    const tokenData = {
        id: user._id,
        username : user.username,
        email : user.email
    }
    const token = await jwt.sign(tokenData,process.env.TOKEN_SECRET!)

    const response = NextResponse.json({
        messae:"Login successfull",
        success:true
    })
    response.cookies.set("userToken",token,{httpOnly:true})

    return response
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
