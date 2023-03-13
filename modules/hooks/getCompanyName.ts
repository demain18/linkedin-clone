import { useRouter } from "next/router";

export const getCompanyName = (): string => {
  const router = useRouter();
  const { slug } = router.query;
  const company: string = process.env.STORYBOOK_ONLINE
    ? "tossbank"
    : slug?.[0]!;

  return company;
};
