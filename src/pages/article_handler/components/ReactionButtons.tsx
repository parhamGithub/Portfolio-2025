import React from "react";
import { useEditReactionMutation } from "../../../slices/apiSlice";


interface Reactions {
  thumbsUp: number;
  hooray: number;
  heart: number;
  rocket: number;
  eyes: number;
}
interface BlogForReactions {
  id: string;
  reactions: Reactions;
}

interface ReactionButtonsProps {
  blog: BlogForReactions;
}

const reactionsEmoji: { [key: string]: string } = {
  thumbsUp: "👍",
  hooray: "🎉",
  heart: "❤️",
  rocket: "🚀",
  eyes: "👀",
};

const ReactionButtons = ({ blog }: ReactionButtonsProps) => {
  const [editReaction, { isLoading }] = useEditReactionMutation();

  const reactionButtons = Object.entries(reactionsEmoji).map(
    ([name, emoji]) => {
      return (
        <button
          key={name}
          type="button"
          className="muted-button reaction-button"
          onClick={async (event: React.MouseEvent<HTMLButtonElement>) => {
            event.preventDefault(); // Prevent default behavior
            event.stopPropagation(); // Stop event bubbling
            console.log(`Clicked reaction: ${name} for blog ID: ${blog.id}`);

            const currentReactions: Reactions = blog.reactions;
            const updatedReactions: Reactions = {
              ...currentReactions,
              [name]: (currentReactions[name as keyof Reactions] || 0) + 1,
            };
            console.log("Updated reactions:", updatedReactions);

            try {
              console.log("Sending editReaction mutation...");
              const response = await editReaction({
                blogId: blog.id,
                updatedReactions,
              }).unwrap();
              console.log("Server response:", response);
            } catch (error) {
              console.error("Mutation failed with error:", error);
            }
          }}
          disabled={isLoading}
        >
          {emoji} {blog.reactions?.[name as keyof Reactions] ?? 0}
        </button>
      );
    }
  );

  return <div>{reactionButtons}</div>;
};

export default ReactionButtons;
