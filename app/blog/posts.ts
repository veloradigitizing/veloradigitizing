import type { BlogPost, BlogBlock } from './types';
export type { BlogPost, BlogBlock };

import post_3d_puff_embroidery_digitizing_guide from './content/3d-puff-embroidery-digitizing-guide';
import post_applique_embroidery_digitizing_guide from './content/applique-embroidery-digitizing-guide';
import post_best_online_embroidery_digitizing_services_comparison_guide from './content/best-online-embroidery-digitizing-services-comparison-guide';
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
import post_pvc_patches_vs_embroidered_patches from './content/pvc-patches-vs-embroidered-patches';
import post_vector_art_for_screen_printing_vs_embroidery from './content/vector-art-for-screen-printing-vs-embroidery';
import post_what_is_embroidery_digitizing from './content/what-is-embroidery-digitizing';
import post_wilcom_vs_hatch_vs_brother_pe_design_embroidery_software from './content/wilcom-vs-hatch-vs-brother-pe-design-embroidery-software';

export const BLOG_POSTS: BlogPost[] = [
  post_3d_puff_embroidery_digitizing_guide,
  post_applique_embroidery_digitizing_guide,
  post_best_online_embroidery_digitizing_services_comparison_guide,
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
  post_pvc_patches_vs_embroidered_patches,
  post_vector_art_for_screen_printing_vs_embroidery,
  post_what_is_embroidery_digitizing,
  post_wilcom_vs_hatch_vs_brother_pe_design_embroidery_software,
];

export const BLOG_CATEGORIES = Array.from(
  new Set(BLOG_POSTS.map((p) => p.category)),
);

export function getPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}

export function getRelatedPosts(post: BlogPost, limit = 3): BlogPost[] {
  const sameCategory = BLOG_POSTS.filter(
    (p) => p.slug !== post.slug && p.category === post.category,
  );
  const others = BLOG_POSTS.filter(
    (p) => p.slug !== post.slug && p.category !== post.category,
  );
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
