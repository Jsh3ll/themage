"use server"

import { IUser } from "@/type/models"
import prisma from "../db"
import { handleError } from "../utils"

export const createUser = async (user: CreateUserParams) => {
    try {
        const preUser = await prisma.user.findFirst({ where: { clerkId: user.clerkId } })
        if (preUser) return JSON.parse(JSON.stringify(preUser))

        const newUser: IUser = {
            clerkId: user.clerkId,
            name: user.name,
            email: user.email,
            planId: "FREE",
            balance: 0,
        }
        await prisma.user.create({
            data: newUser
        })
        return JSON.parse(JSON.stringify(newUser))
    } catch (e) {
        handleError(e)
    }
}

export const getUser = async (clerkId: string) => {
    try {
        const user = await prisma.user.findFirst({ where: { clerkId: clerkId } })

        if (!user) throw new Error("User not found")

        return JSON.parse(JSON.stringify(user))
    } catch (e) {
        handleError(e)
    }
}

export const updateUser = async (clerkId: string, user: UpdateUserParams) => {
    try {
        const updatedUser = await prisma.user.update({
            where: {
                clerkId: clerkId,
            },
            data: {
                name: user.name,
            }
        }) 
        if (!updatedUser) throw new Error("Could not update the user")

        return JSON.parse(JSON.stringify(updateUser))
    } catch (e) {
        handleError(e)
    }
}

export const deleteUser = async (clerkId: string) => {
    try {
        await prisma.user.delete({
            where: {
                clerkId: clerkId,
            },
        })  
        return {
            message: "User deleted successfully"
        }
    } catch (e) {
        handleError(e);
    }
}

export const updateBalance = async (clerkId: string, newBalance: number) => {
    try {
        const updatedUser = await prisma.user.update({
            where: {
                clerkId: clerkId,
            },
            data: {
                balance: newBalance,
            }
        })  

        if (!updatedUser) throw new Error("Could not update the balance of the user")

        return JSON.parse(JSON.stringify(updatedUser));
    } catch (e) {
        handleError(e);
    }
}
