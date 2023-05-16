import type { PageServerLoad } from './$types';

export const load = (async ({ fetch }) => {
  return {
    opinion: (await (await fetch('https://example.com')).text()).match(/<h1>([^<]+)/)?.[1] ?? "nope"
  };
}) satisfies PageServerLoad;
