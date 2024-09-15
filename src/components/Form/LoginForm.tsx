import { Button, PasswordInput, Stack, Text, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";

export default function LoginForm() {
  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      username: "",
      email: "",
      password: "",
    },

    validate: {
      username: (value) => (/^\w+$/.test(value) ? null : "Invalid username"),
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
    },
  });

  return (
    <form onSubmit={form.onSubmit((values) => console.log(values))}>
      <Stack my={32} gap={32}>
        <TextInput label="Email address" size="md" key={form.key("email")} {...form.getInputProps("email")} />
        <PasswordInput label="Password" description="Use 8 or more characters with a mix of letters, numbers & symbols" inputWrapperOrder={["label", "input", "description", "error"]} size="md" key={form.key("password")} {...form.getInputProps("password")} />
      </Stack>

      <Text my={32}>Captcha here</Text>

      <Stack align="start" mt={32}>
        <Button radius={99} className="transition hover:opacity-75" size="xl" type="submit">
          Log in
        </Button>
      </Stack>
    </form>
  );
}
