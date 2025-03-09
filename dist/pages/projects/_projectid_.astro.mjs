/* empty css                                    */
import { c as createComponent, r as renderTemplate, a as renderComponent, b as createAstro, m as maybeRenderHead, d as addAttribute } from '../../chunks/astro/server_1kRJLfSX.mjs';
import 'kleur/colors';
import '@astrojs/internal-helpers/path';
import { $ as $$ProjectLayout, a as $$Image, b as $$SectionTitle, c as $$CenterTitle } from '../../chunks/ProjectLayout_CgsBJ8cC.mjs';
import { ExternalLinkIcon, ClipboardCopyIcon, CheckIcon } from 'lucide-preact';
export { renderers } from '../../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro();
function getStaticPaths() {
  return [
    { params: { projectID: "arms-v3" } },
    { params: { projectID: "vortexa" } },
    { params: { projectID: "next-mart" } },
    { params: { projectID: "arms-v2" } },
    { params: { projectID: "xrecon" } },
    { params: { projectID: "yoatube" } },
    { params: { projectID: "srinivas-exam-manager" } },
    { params: { projectID: "piktures" } },
    { params: { projectID: "days-beyond" } },
    { params: { projectID: "arms-v1" } },
    { params: { projectID: "film-stack" } },
    { params: { projectID: "covidtrax" } },
    { params: { projectID: "climate" } }
  ];
}
const $$projectID = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$projectID;
  const { projectID } = Astro2.params;
  const ProjectInfo = import('../../chunks/ProjectsList_C8SRQBS0.mjs');
  const { ProjectsList } = await ProjectInfo;
  const [project] = ProjectsList.filter(
    (itm) => itm.Name.replaceAll(" ", "-").toLowerCase() === projectID
  );
  return renderTemplate(_a || (_a = __template(["", ' <script type="module">\n    const emailCopyBtn = document.getElementById("emailCopyBtn");\n    const passCopyBtn = document.getElementById("passCopyBtn");\n    const emailContent = document.getElementById("emailContent");\n    const passContent = document.getElementById("passContent");\n    const emailCopyIcons = document.querySelectorAll(".emailCopyIcon");\n    const passCopyIcons = document.querySelectorAll(".passCopyIcon");\n\n    emailCopyBtn?.addEventListener("click", () => {\n        navigator.clipboard.writeText(emailContent?.textContent);\n\n        emailCopyIcons[0].classList.replace("visible", "invisible");\n        emailCopyIcons[1].classList.replace("invisible", "visible");\n\n        setTimeout(() => {\n            emailCopyIcons[0].classList.replace("invisible", "visible");\n            emailCopyIcons[1].classList.replace("visible", "invisible");\n        }, 2000);\n    });\n\n    passCopyBtn?.addEventListener("click", () => {\n        navigator.clipboard.writeText(passContent?.textContent);\n\n        passCopyIcons[0].classList.replace("visible", "invisible");\n        passCopyIcons[1].classList.replace("invisible", "visible");\n\n        setTimeout(() => {\n            passCopyIcons[0].classList.replace("invisible", "visible");\n            passCopyIcons[1].classList.replace("visible", "invisible");\n        }, 2000);\n    });\n<\/script>'])), renderComponent($$result, "ProjectLayout", $$ProjectLayout, { "title": `${project.Name} | ChiragChrg`, "description": project.ShortDesc }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="Fade_In flex_center absolute inset-0 w-full h-full z-[-1]"> ${renderComponent($$result2, "Image", $$Image, { "src": project.Shot, "alt": `${project.Name}_BG_Image`, "class": "w-full h-full opacity-50 blur-md p-6 object-cover", "loading": "eager" })} <div class="bg-imgOverlayGradient w-full h-full absolute inset-0"></div> </div> <div class="flex_center flex-col gap-4 py-4"> ${renderComponent($$result2, "Image", $$Image, { "src": project.Logo, "alt": `${project.Name}_Image`, "class": "Fade_Up", "width": 100, "height": 100, "loading": "eager" })} <h1 class="Fade_Up font-ubuntu text-[1.6em] md:text-[1.8em] tracking-wider md:tracking-[0.2em] text-center"> ${project.Name} </h1> <div class="w-full flex_center gap-4"> ${project?.Tech?.map((tech, index) => {
    return renderTemplate`${renderComponent($$result2, "Image", $$Image, { "src": tech.icon, "alt": `TechIcon_${index}`, "width": 28, "height": 28, "class": "Fade_Stagger", "loading": "eager" })}`;
  })} </div> <div class="flex_center gap-4 text-[1em]"> <a${addAttribute(project.Source, "href")} target="_blank" rel="author" class="Fade_Stagger flex_center gap-2 bg-LinkBtnGradient px-4 py-2 rounded"> <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" color="#fff" height="24" width="24" xmlns="http://www.w3.org/2000/svg" style="color: var(--heroSocialColor);"> <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path> </svg> <span>Source Code</span> </a> <a${addAttribute(project.Link, "href")} target="_blank" rel="noreferrer" class="Fade_Stagger flex_center gap-2 bg-LinkBtnGradient px-4 py-2 rounded"> ${renderComponent($$result2, "ExternalLinkIcon", ExternalLinkIcon, {})} <span>Live Demo</span> </a> </div> </div> <h2 class="Fade_Up font-ubuntu text-[1.5em] pt-4 pb-3 w-full">
About the project.
</h2> <div class="flex justify-center items-center xl:items-start flex-col xl:flex-row gap-4 py-10"> ${renderComponent($$result2, "Image", $$Image, { "src": project.Mockup, "alt": `${project.Name}_Mockup_Image`, "width": 600, "class": "Fade_Up", "loading": "eager" })} <div class="Fade_Up flex_center flex-col gap-4"> ${project.Demo && renderTemplate`<div class="flex items-center flex-col gap-4 w-fit px-4 py-2 bg-LinkBtnGradient rounded-md mt-4 lg:mt-0"> <h3 class="min-w-max my-auto">Demo Credentials</h3> <div class="flex justify-evenly w-full flex-col md:flex-row gap-2 text-[0.8em]"> <div class="flex gap-4 bg-backgroundLite p-2 rounded-md"> <span class="min-w-20 md:w-fit">Email : </span> <span id="emailContent" class="w-full"> ${project.Demo?.email} </span> <button id="emailCopyBtn" class="flex_center relative"> ${renderComponent($$result2, "ClipboardCopyIcon", ClipboardCopyIcon, { "class": "emailCopyIcon visible" })} ${renderComponent($$result2, "CheckIcon", CheckIcon, { "class": "emailCopyIcon absolute invisible" })} </button> </div> <div class="flex gap-4 bg-backgroundLite p-2 rounded-md"> <span class="min-w-20 md:w-fit">
Password :${" "} </span> <span id="passContent" class="w-full"> ${project.Demo?.password} </span> <button id="passCopyBtn" class="flex_center relative"> ${renderComponent($$result2, "ClipboardCopyIcon", ClipboardCopyIcon, { "class": "passCopyIcon visible" })} ${renderComponent($$result2, "CheckIcon", CheckIcon, { "class": "passCopyIcon absolute invisible" })} </button> </div> </div> </div>`} <p class="w-full text-justify text-[1.1em] mt-4 px-4 indent-12"> ${project.Desc} </p> </div> </div> ${renderComponent($$result2, "SectionTitle", $$SectionTitle, { "title": "Features", "color": "primary" }, { "default": ($$result3) => renderTemplate` <div class="grid grid-cols-1 md:grid-cols-2 gap-y-4 md:gap-y-6 md:gap-x-10 md:mx-4"> ${project.features.map((items) => renderTemplate`<div class="Fade_Up p-2 md:p-4 text-center md:text-start flex flex-col gap-3 border border-primaryLiteAlt sm:border-transparent hover:border-primaryLiteAlt bg-skillGradientAlt rounded-md transition-colors duration-200"> <span class="font-ubuntu text-[1.125em]"> ${items.title} </span> <p class="md:pl-8 text-center md:text-justify"> ${items.description} </p> </div>`)} </div> ` })} ${renderComponent($$result2, "CenterTitle", $$CenterTitle, { "title": "Tech Stack", "color": "secondary" })} <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-2 mb-96 4xl:mb-[30rem]"> ${project.Tech.map((tech) => renderTemplate`<div class="Fade_Stagger flex_center flex-col gap-4 p-4 border border-secondaryLiteAlt sm:border-transparent hover:border-secondaryLiteAlt bg-skillGradientAlt rounded-md transition-colors duration-200"> <div class="flex_center gap-4"> ${renderComponent($$result2, "Image", $$Image, { "src": tech.icon, "alt": tech.title, "width": 40, "height": 40 })} <span class="text-[1.2em]">${tech.title}</span> </div> <p class="text-center">${tech.description}</p> </div>`)} </div> ` }));
}, "E:/Mine/Resume/Yurii/first portfolio/src/pages/projects/[projectID].astro", void 0);

const $$file = "E:/Mine/Resume/Yurii/first portfolio/src/pages/projects/[projectID].astro";
const $$url = "/projects/[projectID]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$projectID,
    file: $$file,
    getStaticPaths,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
