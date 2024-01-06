"use client";

import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import Link from "next/link";



export default function Signup() {
    return (
      <div className="flex items-center justify-center pt-28 ">
        <Card className="w-full max-w-md">
          <CardHeader className="space-y-1 text-center">
            <CardTitle className="text-2xl">Create an account</CardTitle>
            <CardDescription>Fill in the details to sign up</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="grid gap-2 md:grid-cols-2">
              <div>
                <Label htmlFor="firstName">First Name</Label>
                <Input id="firstName" type="text" placeholder="John" />
              </div>
              <div>
                <Label htmlFor="lastName">Last Name</Label>
                <Input id="lastName" type="text" placeholder="Doe" />
              </div>
            </div>
            <div>
              <Label htmlFor="confirmPassword">Mobile Number</Label>
              <Input id="confirmPassword" type="text" placeholder="Enter Mobile Number" maxLength={10} />
            </div>
            <div className="grid gap-2 md:grid-cols-2">
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="john.doe@example.com" />
              </div>
              <div>
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" placeholder="********" />
              </div>
            </div>
            <div>
              <Label htmlFor="confirmPassword">Confirm Password</Label>
              <Input id="confirmPassword" type="password" placeholder="********" />
            </div>
            
          </CardContent>
          <CardFooter className="flex justify-end">
            <Button className="w-full">Sign Up</Button>
          </CardFooter>
          <div className="text-center mt-4">
            <p>
              Already have an account?{' '}
              <Link href="/login" className="text-blue-500 hover:underline">
                Login
              </Link>
            </p>
          </div>
        </Card>
      </div>
    );
  }
  