"use client";

import { toast } from "sonner";
import { Button } from "@/components/ui/button";
// import {
//   Form,
//   FormControl,
//   FormDescription,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/components/ui/form";
import { Input } from "@/components/ui/input";

function EmailForm() {
  return (
    // TODO
    <form method="POST" action="mailto: kmr_apon@yahoo.com">
      <Input placeholder="Sending an Email..." />
      <Button
        type="submit"
        className="mt-4"
        onClick={() =>
          toast("Event has been created", {
            description: "Sunday, December 03, 2023 at 9:00 AM",
            action: {
              label: "Undo",
              onClick: () => console.log("Undo"),
            },
          })
        }
      >
        Submit
      </Button>
    </form>
  );
}

export { EmailForm };
