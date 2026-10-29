import type { BlogPost, BlogBlock } from './types';
export type { BlogPost, BlogBlock };

import post_3d_puff_embroidery_digitizing_guide from './content/3d-puff-embroidery-digitizing-guide';
import post_applique_embroidery_digitizing_guide from './content/applique-embroidery-digitizing-guide';
import post_best_online_embroidery_digitizing_services_comparison_guide from './content/best-online-embroidery-digitizing-services-comparison-guide';
import post_cap_hat_logo_embroidery_digitizing_guide from './content/cap-hat-logo-embroidery-digitizing-guide';
import post_common_embroidery_digitizing_mistakes from './content/common-embroidery-digitizing-mistakes';
import post_convert_png_jpg_to_dst_embroidery_file from './content/convert-png-jpg-to-dst-embroidery-file';
import post_custom_patch_types_embroidered_woven_pvc_leather_chenille from './content/custom-patch-types-embroidered-woven-pvc-leather-chenille';
import post_digitize_logo_illustrator_embroidery from './content/digitize-logo-illustrator-embroidery';
import post_dst_vs_pes_vs_jef_embroidery_file_formats from './content/dst-vs-pes-vs-jef-embroidery-file-formats';
import post_embroidery_stabilizer_guide_cutaway_vs_tearaway from './content/embroidery-stabilizer-guide-cutaway-vs-tearaway';
import post_embroidery_digitizing_cost_pricing_guide from './content/embroidery-digitizing-cost-pricing-guide';
import post_embroidery_underlay_types_explained from './content/embroidery-underlay-types-explained';
import post_fix_embroidery_fabric_puckering_and_thread_breaks from './content/fix-embroidery-fabric-puckering-and-thread-breaks';
import post_how_to_estimate_embroidery_stitch_count from './content/how-to-estimate-embroidery-stitch-count';
import post_how_to_prepare_logo_for_embroidery_digitizing from './content/how-to-prepare-logo-for-embroidery-digitizing';
import post_jacket_back_embroidery_digitizing_guide from './content/jacket-back-embroidery-digitizing-guide';
import post_left_chest_logo_embroidery_digitizing_guide from './content/left-chest-logo-embroidery-digitizing-guide';
import post_manual_digitizing_vs_ai_auto_digitizing from './content/manual-digitizing-vs-ai-auto-digitizing';
import post_vector_art_for_screen_printing_vs_embroidery from './content/vector-art-for-screen-printing-vs-embroidery';
import post_what_is_embroidery_digitizing from './content/what-is-embroidery-digitizing';
import post_wilcom_vs_hatch_vs_brother_pe_design_embroidery_software from './content/wilcom-vs-hatch-vs-brother-pe-design-embroidery-software';
import post_how_to_digitize_small_text_micro_lettering_embroidery from './content/how-to-digitize-small-text-micro-lettering-embroidery';
import post_embroidery_on_towels_and_fleece_knockdown_stitch_guide from './content/embroidery-on-towels-and-fleece-knockdown-stitch-guide';
import post_best_free_embroidery_digitizing_software_inkstitch_guide from './content/best-free-embroidery-digitizing-software-inkstitch-guide';
import post_chenille_and_varsity_jacket_patch_digitizing_guide from './content/chenille-and-varsity-jacket-patch-digitizing-guide';
import post_hoodie_embroidery_digitizing_guide from './content/hoodie-embroidery-digitizing-guide';
import post_custom_leather_patches_for_hats_guide from './content/custom-leather-patches-for-hats-guide';
import post_why_outsource_embroidery_digitizing_usa_guide from './content/why-outsource-embroidery-digitizing-usa-guide';

export const BLOG_POSTS: BlogPost[] = [
  post_3d_puff_embroidery_digitizing_guide,
  post_applique_embroidery_digitizing_guide,
  post_best_online_embroidery_digitizing_services_comparison_guide,
  post_cap_hat_logo_embroidery_digitizing_guide,
  post_common_embroidery_digitizing_mistakes,
  post_convert_png_jpg_to_dst_embroidery_file,
  post_custom_patch_types_embroidered_woven_pvc_leather_chenille,
  post_digitize_logo_illustrator_embroidery,
  post_dst_vs_pes_vs_jef_embroidery_file_formats,
  post_embroidery_stabilizer_guide_cutaway_vs_tearaway,
  post_embroidery_digitizing_cost_pricing_guide,
  post_embroidery_underlay_types_explained,
  post_fix_embroidery_fabric_puckering_and_thread_breaks,
  post_how_to_estimate_embroidery_stitch_count,
  post_how_to_prepare_logo_for_embroidery_digitizing,
  post_jacket_back_embroidery_digitizing_guide,
  post_left_chest_logo_embroidery_digitizing_guide,
  post_manual_digitizing_vs_ai_auto_digitizing,
  post_vector_art_for_screen_printing_vs_embroidery,
  post_what_is_embroidery_digitizing,
  post_wilcom_vs_hatch_vs_brother_pe_design_embroidery_software,
  post_how_to_digitize_small_text_micro_lettering_embroidery,
  post_embroidery_on_towels_and_fleece_knockdown_stitch_guide,
  post_best_free_embroidery_digitizing_software_inkstitch_guide,
  post_chenille_and_varsity_jacket_patch_digitizing_guide,
  post_hoodie_embroidery_digitizing_guide,
  post_custom_leather_patches_for_hats_guide,
  post_why_outsource_embroidery_digitizing_usa_guide,
];

export const BLOG_CATEGORIES = Array.from(
  new Set(BLOG_POSTS.map((p) => p.category)),
);

export function getPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}

/**
 * Related posts for the "Keep Reading" block.
 *
 * Walks the post list circularly starting just after the current post, taking
 * same-category posts first and then any others. Because the starting point
 * moves with each post, every article (including the newest ones at the end
 * of the list) receives inbound links from several other articles instead of
 * the first few posts being linked from everywhere.
 */
export function getRelatedPosts(post: BlogPost, limit = 3): BlogPost[] {
  const start = BLOG_POSTS.findIndex((p) => p.slug === post.slug);
  const total = BLOG_POSTS.length;
  const rotated: BlogPost[] = [];
  for (let step = 1; step < total; step += 1) {
    const candidate = BLOG_POSTS[(start + step + total) % total];
    if (candidate.slug !== post.slug) rotated.push(candidate);
  }
  const sameCategory = rotated.filter((p) => p.category === post.category);
  const others = rotated.filter((p) => p.category !== post.category);
  return [...sameCategory, ...others].slice(0, limit);
}

export function formatPostDate(iso: string): string {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  });
}
