declare module "next-pwa" {
  import type { NextConfig } from "next";

  interface PWAOptions {
    dest: string;
    register?: boolean;
    skipWaiting?: boolean;
    disable?: boolean;
    scope?: string;
    sw?: string;
    runtimeCaching?: any;
    buildExcludes?: string[];
    fallback?: { [path: string]: string };
  }

  const withPWA: (
    nextConfig: NextConfig & { pwa?: PWAOptions }
  ) => NextConfig;

  export default withPWA;
}
