/** Patch samples currently approved for display. Original files stay archived. */
export function isDesignVisible(image: string): boolean {
  if (image.startsWith("/images/felt-patch/") || image.startsWith("/images/twill-patch/")) return true;
  return ![
    "/images/patches/",
    "/images/custom-patches/",
    "/images/chenille/",
    "/images/bundles/",
  ].some(prefix => image.startsWith(prefix)) && !image.split("/").pop()?.includes("-patch-");
}
