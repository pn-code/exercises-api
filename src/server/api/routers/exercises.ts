import { User } from "@clerk/nextjs/dist/api";
import { clerkClient } from "@clerk/nextjs/server";
import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

const filterUserForClient = (user: User) => {
  return {
    id: user.id,
    fullName: `${user.firstName} ${user.lastName}`,
    profileImageUrl: user.profileImageUrl,
  };
};

export const exercisesRouter = createTRPCRouter({
  getAll: publicProcedure.query(async ({ ctx }) => {
    const exercises = await ctx.prisma.exercises.findMany({
      take: 100,
    });

    const users = (
      await clerkClient.users.getUserList({
        userId: exercises.map((exercise) => exercise.authorId),
        limit: 100,
      })
    ).map(filterUserForClient);

    return exercises.map((exercise) => ({
      exercise,
      author: users.find((user) => user.id === exercise.authorId),
    }));
  }),
});
