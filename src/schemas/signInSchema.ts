import {z} from "zod"

export const signInSchema = z.object({
    identifier: z.string(), //email verify
    password: z.string()
})