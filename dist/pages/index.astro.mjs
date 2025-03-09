/* empty css                                 */
import { c as createComponent, r as renderTemplate, a as renderComponent } from '../chunks/astro/server_BqyrsqSq.mjs';
import 'kleur/colors';
import { d as $$Hero, e as $$About, f as $$Skills, g as $$Projects, h as $$Contact, i as $$Layout } from '../chunks/ProjectLayout_C611BL56.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, {})} ${renderComponent($$result2, "About", $$About, {})} ${renderComponent($$result2, "Skills", $$Skills, {})} ${renderComponent($$result2, "Projects", $$Projects, {})} ${renderComponent($$result2, "Contact", $$Contact, {})} ` })}`;
}, "C:/Users/Administrator/Downloads/first portfolio/src/pages/index.astro", void 0);

const $$file = "C:/Users/Administrator/Downloads/first portfolio/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
