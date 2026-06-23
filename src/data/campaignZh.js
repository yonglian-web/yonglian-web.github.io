import { campaign } from './campaign.js';

// Simplified-Chinese homepage content. Proper nouns stay in English (IEEE, TAB,
// PSPB, MGA, "One IEEE", society/award/institution names, the candidate's name).
// activityGroups items are the English citation lists from campaign.js — only the
// group titles are translated.
export const campaignZh = {
  name: campaign.name, // proper noun — unchanged
  nomination: '由 IEEE Technical Activities 提名',
  title: '教授，电气工程与计算机科学系，York University',
  location: '加拿大安大略省多伦多',
  oneLine:
    'Yong “Peter” Lian 博士 35 余年来始终致力于打破壁垒、搭建桥梁，并为 IEEE Technical Activities 将愿景化为行动。',
  biography: [
    'Yong (Peter) Lian 博士 35 余年来专注于 IEEE 当下最需要的事：打破壁垒、搭建桥梁、将愿景化为行动。',
    '作为 biomedical circuits and systems 领域举世公认的开拓者，他在超低功耗事件驱动架构与信号处理方面的创新，重塑了全球可穿戴与植入式医疗技术。',
    '他发表论文 350 余篇，争取到逾 2,500 万美元科研经费，并获得 20 余项奖项，包括 2023 IEEE CASS Mac Van Valkenburg Award 与 2024 IEEE CASS Meritorious Service Award。',
    '他拥有 9 年产业界经验与 30 年学术界经历，并联合创办了一家专注可穿戴设备与脑机接口（brain-computer interfaces）的初创公司，为 IEEE 的领导工作带来实践与战略视角的难得结合。',
    '作为 Canadian Academy of Engineering、Academy of Engineering Singapore 与 IEEE 的 Fellow，他在快速演进的技术格局中具备引领 Technical Activities 的独特优势。',
  ],
  statement: [
    'IEEE Technical Activities 正进入快速变革期——技术演进的速度、不断变化的产业期待，以及 AI 在各学科日益增长的影响，共同推动着这一进程。我的愿景是把 IEEE 打造成统一的全球技术平台，通过协作、包容与高效执行推动创新。',
    'AI 天然跨越各 Society/Council 的边界。我会把跨 Society/Council 协作作为 IEEE 关键的结构性应对加以优先推进，为联合项目搭建敏捷框架，使 IEEE 始终走在前沿。',
    '我们以志愿者为主导的架构是一种优势，但它必须不断演进，才能有效应对快速变化的技术。作为 VP Technical Activities，我将积极推动治理模式与跨 Division 工作组，强化“One IEEE”理念，使 IEEE 在快速演进的技术格局中兼具速度与协同。',
    '我还将把 AI 作为 IEEE 内部的赋能力量：以智能工具支持志愿者、提升会员参与度，并改进我们在全球的运作与价值交付方式。我将与 MGA 紧密合作，扩大公平参与，确保我们的技术活动体现全球 IEEE 社区的多元与实力。',
    '凭借在 IEEE 各领域已验证的执行力，我已准备好带领 Technical Activities 向前迈进——并交出实绩。',
  ],
  activitiesTitle: 'IEEE 活动',
  activitiesIntro:
    'Lian 博士 35 余年来一直是活跃的 IEEE 志愿者，在多个重要 IEEE 委员会中作出重要贡献，包括 Technical Activities Board (TAB)、Publication Services and Products Board (PSPB) 以及 Member and Geographic Activities (MGA)。',
  activityGroups: campaign.activityGroups.map((group, index) => ({
    title: [
      '他在 IEEE 各 Board 与委员会中的领导与成员职务包括：',
      '在 IEEE Circuits and Systems Society，他曾担任：',
      '在出版物与会议方面：',
      '地方活动：',
    ][index],
    items: group.items, // English citations — unchanged
  })),
};
