"use server";

import { AuthError } from "next-auth";
import * as z from "zod";

import { LoginSchema } from "@/schemas";