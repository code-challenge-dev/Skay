/* empty css                                 */
import { c as createComponent, b as renderComponent, r as renderTemplate } from '../chunks/astro/server_BiPje1uk.mjs';
import 'kleur/colors';
import { d as $$Layout, e as $$Hero, f as $$About, g as $$Skills, h as $$Projects, i as $$Contact } from '../chunks/ProjectLayout_BB5wRube.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, {})} ${renderComponent($$result2, "About", $$About, {})} ${renderComponent($$result2, "Skills", $$Skills, {})} ${renderComponent($$result2, "Projects", $$Projects, {})} ${renderComponent($$result2, "Contact", $$Contact, {})} ` })}`;
}, "E:/Mine/Resume/Yurii/first portfolio/src/pages/index.astro", void 0);

const $$file = "E:/Mine/Resume/Yurii/first portfolio/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
