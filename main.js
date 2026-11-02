/**
 * ZHOU YUXUAN 개인 소개 웹사이트 인터랙션 및 다국어 지원 스크립트
 */

// 다국어 텍스트 데이터 딕셔너리 (한국어 & 중국어)
const i18nData = {
  ko: {
    // 네비게이션
    nav_home: "홈",
    nav_about: "나를 소개합니다",
    nav_campus: "대학생활",
    nav_hobbies: "취미",
    nav_skills: "보유 역량",

    // Hero
    hero_badge: "Campus Life Diary",
    hero_sub: "Welcome to My World!",
    hero_hello_prefix: "안녕하세요,",
    hero_hello_suffix: "입니다!",
    hero_desc: "한림대학교에서 경영학을 배우며, 활기찬 대학생활과 따뜻한 친구들과의 추억을 소중히 채워가고 있어요. 저의 밝고 소소한 일상 속으로 초대합니다!",
    chip_school: "한림대학교 (Hallym Univ.)",
    chip_major: "경영학 전공 (4학년)",
    btn_explore: "프로필 둘러보기",
    btn_campus: "캠퍼스 활동 보기",
    status_active: "캠퍼스 라이프 즐기는 중 🌿",
    badge_mbti_sub: "자유로운 연예인",
    badge_food_title: "맛집 탐방러",
    badge_food_sub: "행복한 미식 생활",

    // About
    about_subtitle: "Who Am I?",
    about_title: "나를 소개합니다",
    summary_major_text: "경영대학 경영학 전공",
    fact_grade_label: "학년",
    fact_grade_val: "4학년 (Senior)",
    fact_lang_label: "언어",
    fact_lang_val: "중국어 (모국어), 한국어",
    fact_interest_label: "관심사",
    fact_interest_val: "문화교류, 맛집 탐방, 사진",
    story_title: "밝고 따뜻한 에너지, ESFP",
    story_tag: "자연스러운 친화력",
    story_p1: "사람들과 소통하는 것을 좋아하고 긍정적인 에너지를 전하는 성격입니다. 한림대학교에서 경영학을 공부하며 글로벌한 시야를 넓히고 있으며, 다양한 문화적 배경을 가진 동기들과 스스럼없이 어울립니다.",
    story_p2: "\"매 순간 진심을 다하고 즐겁게!\"를 모토로, 대학 캠퍼스에서 경험할 수 있는 다양한 교내 프로그램과 맛있는 음식 탐방을 통해 풍성한 배움과 추억을 만들고 있습니다.",
    trait1_title: "뛰어난 친화력",
    trait1_desc: "처음 만나는 학우들과도 자연스럽게 대화를 트고 편안한 분위기를 만듭니다.",
    trait2_title: "열정적인 참여",
    trait2_desc: "튜터링, 멘토링, 문화교류 등 나눔과 성장이 있는 활동에 적극적으로 임합니다.",
    trait3_title: "소소한 일상의 기록",
    trait3_desc: "친구들과의 맛집 탐방과 캠퍼스 순간들을 예쁜 사진으로 간직하는 것을 즐깁니다.",

    // Campus
    campus_subtitle: "My University Days",
    campus_title: "캠퍼스 라이프 & 교내 활동",
    campus_desc: "서로 배우고 나누는 소중한 경험! 한림대학교에서 성실하게 참여해 온 주요 교내 프로그램들입니다.",
    tag_exchange: "문화 교류",
    tag_mentoring: "멘토링",
    tag_tutoring: "튜터링",
    campus1_title: "문화 교류 프로그램",
    campus1_desc: "다국적 학생들과 교류하며 서로의 언어와 문화를 깊이 이해하고 존중하는 장에 참여했습니다. 글로벌 친화력과 소통 능력을 기르는 뜻깊은 시간입니다.",
    campus1_pt1: "다문화 이해 및 소통 활성화",
    campus1_pt2: "글로벌 친구들과의 네트워크 형성",
    campus2_title: "멘토링 프로그램",
    campus2_desc: "선후배 간의 유대감을 형성하고 학교 생활의 꿀팁과 학업 노하우를 공유하는 멘토링 활동에 참여했습니다. 서로의 고민을 나누고 지지해 주는 든든한 동반자 역할을 경험했습니다.",
    campus2_pt1: "캠퍼스 적응 및 학업 가이드",
    campus2_pt2: "따뜻한 공감과 신뢰 구축",
    campus3_title: "튜터링 프로그램",
    campus3_desc: "전공 및 학업 과정에서 스터디 그룹을 이루어 함께 문제를 해결하고 학습 역량을 강화했습니다. 지식을 나누며 스스로도 한 단계 더 깊이 성장하는 보람을 얻었습니다.",
    campus3_pt1: "협력적 자기주도 학습 증진",
    campus3_pt2: "동반 성장의 가치 실현",

    // Hobbies
    hobbies_subtitle: "What I Love",
    hobbies_title: "취미 & 힐링 라이프",
    hobbies_desc: "친구들과 맛있는 음식을 먹고, 예쁜 추억을 사진으로 남기는 것이 가장 큰 힐링입니다!",
    hobby1_title: "친구들과 맛집 탐방",
    hobby1_desc: "동기 및 친구들과 함께 소문난 핫플레이스와 숨은 맛집을 찾아다니며 맛있는 음식을 먹는 시간을 제일 좋아합니다.",
    hobby2_title: "음식 사진 촬영",
    hobby2_desc: "맛있는 요리가 나오면 색감과 구도를 살려 정성껏 사진으로 담아둡니다. 눈으로도 즐기고 기록으로도 남기는 즐거움!",
    hobby3_title: "우정 인증 사진 & 추억",
    hobby3_desc: "함께 웃고 이야기 나눈 순간들을 셀카나 단체 사진으로 포착하여 소중한 대학생활 앨범을 만들어 가고 있습니다.",
    quote_text: "\"좋은 사람들과 함께 맛있는 음식을 나누는 순간이야말로 대학생활에서 가장 반짝이는 시간이에요.\"",

    // Skills
    skills_subtitle: "Capabilities",
    skills_title: "보유 역량 & 소프트웨어",
    skills_desc: "경영학 전공 과정과 교내 프로젝트를 성실하게 수행하며 익힌 실무 기초 역량입니다.",
    office_title: "Microsoft Office 소프트웨어 활용",
    office_sub: "보고서 작성, 데이터 정리, 프레젠테이션 제작을 위한 탄탄한 기본기",
    sw_excel_desc: "데이터 정리 & 기초 수식 분석",
    sw_ppt_desc: "깔끔한 발표 자료 구성 & 슬라이드 디자인",
    sw_word_desc: "단정한 문서 서식 & 리포트 작성",
    soft1_title: "다문화 커뮤니케이션",
    soft1_desc: "한국어와 중국어를 바탕으로 한 유연한 소통 및 글로벌 학우들과의 원활한 팀워크",
    soft2_title: "경영학적 기초 사고",
    soft2_desc: "조직, 마케팅, 관리 전반에 걸친 경영학 전공 지식과 프로젝트 협업 감각",

    // Message
    msg_title: "언제나 반갑게 인사해주세요!",
    msg_desc: "저의 웹사이트를 방문해 주셔서 진심으로 감사드립니다. 캠퍼스에서 만나면 밝게 인사 나눠요!",
    contact_loc: "강원특별자치도 춘천시 한림대학길 1 (한림대학교)",
    footer_slogan: "한림대학교 · 경영대학 경영학전공"
  },

  zh: {
    // 导航
    nav_home: "首页",
    nav_about: "关于我",
    nav_campus: "校园生活",
    nav_hobbies: "我的爱好",
    nav_skills: "个人技能",

    // Hero
    hero_badge: "校园生活日志",
    hero_sub: "Welcome to My World!",
    hero_hello_prefix: "你好，我是",
    hero_hello_suffix: "！",
    hero_desc: "在翰林大学攻读经营学专业，珍惜活力充沛的大学时光，与朋友们共同创造温暖的回忆。欢迎来到我明朗而美好的小小世界！",
    chip_school: "翰林大学 (Hallym Univ.)",
    chip_major: "经营学专业 (大四)",
    btn_explore: "浏览个人简介",
    btn_campus: "查看校园活动",
    status_active: "正在享受充实的大学时光 🌿",
    badge_mbti_sub: "自由灵动的表演者",
    badge_food_title: "美食探店达人",
    badge_food_sub: "幸福的美食生活",

    // About
    about_subtitle: "Who Am I?",
    about_title: "个人简介",
    summary_major_text: "经营学院 经营学专业",
    fact_grade_label: "年级",
    fact_grade_val: "大四 (Senior)",
    fact_lang_label: "语言",
    fact_lang_val: "中文 (母语), 韩语",
    fact_interest_label: "兴趣",
    fact_interest_val: "文化交流, 美食探店, 摄影打卡",
    story_title: "充满温暖与活力的能量，ESFP",
    story_tag: "天生亲和力",
    story_p1: "乐于与人沟通并传递积极的正能量。在翰林大学学习经营学，不断拓宽国际化视野，能够与不同文化背景的同学自然愉快地相处相融。",
    story_p2: "以“认真对待每个瞬间，快乐生活！”为座右铭，通过参与丰富的校内交流项目和寻访各地美食，在大学里收获了充实的成长与珍贵的回忆。",
    trait1_title: "出色的亲和力",
    trait1_desc: "能自然地与初次见面的同学开启话题，营造轻松舒适的交流氛围。",
    trait2_title: "热情积极的参与度",
    trait2_desc: "积极投入到导师辅导、同伴助学及文化交流等充满分享与成长的活动中。",
    trait3_title: "记录微小而确定的幸福",
    trait3_desc: "喜欢用镜头记录与朋友探店的美食与校园日常，珍藏每一个闪光瞬间。",

    // Campus
    campus_subtitle: "My University Days",
    campus_title: "校园生活与校内活动",
    campus_desc: "彼此学习、互相分享的宝贵经历！这是我在翰林大学积极参与的主要校内活动。",
    tag_exchange: "文化交流",
    tag_mentoring: "导师项目",
    tag_tutoring: "同伴辅导",
    campus1_title: "多元文化交流项目",
    campus1_desc: "与来自不同国家的留学生和本土同学交流，加深对多元语言和文化的理解与尊重，锻炼了跨文化沟通与全球化社交能力。",
    campus1_pt1: "促进多元文化理解与顺畅沟通",
    campus1_pt2: "建立深厚的跨国友谊圈",
    campus2_title: "校园辅导 (Mentoring) 项目",
    campus2_desc: "参与学长学姐与学弟学妹之间的结对辅导，分享校园生活经验与学习技巧，倾听彼此的困惑，扮演温暖可靠的同行伙伴角色。",
    campus2_pt1: "校园适应与学业发展指导",
    campus2_pt2: "建立真诚信任与情感共鸣",
    campus3_title: "同伴辅导 (Tutoring) 项目",
    campus3_desc: "在专业课程与学业过程中组建互助学习小组，共同探讨解决学业难题。在分享知识的同时，也实现了自我知识体系的巩固与提升。",
    campus3_pt1: "提升协作能力与自主学习力",
    campus3_pt2: "体会携手并进与共同成长的价值",

    // Hobbies
    hobbies_subtitle: "What I Love",
    hobbies_title: "兴趣爱好与治愈时光",
    hobbies_desc: "和朋友们一起品尝美味，拍照留下美好的瞬间，这就是我最大的治愈！",
    hobby1_title: "与朋友一起探访美食",
    hobby1_desc: "最喜欢和朋友、同学们一起打卡热门餐厅与隐藏美食小店，分享热气腾腾的美味料理。",
    hobby2_title: "美食摄影记录",
    hobby2_desc: "当精致美味的食物端上桌，精心寻找光线和角度拍照留念，用眼睛和镜头双重享受美食的魅力！",
    hobby3_title: "合影留念与友谊定格",
    hobby3_desc: "用自拍和合影捕捉每一次欢声笑语的瞬间，用心整理专属于大学时代的美好记忆相册。",
    quote_text: "“与合拍的人一同分享美味的瞬间，正是大学生活里最闪闪发光的光芒。”",

    // Skills
    skills_subtitle: "Capabilities",
    skills_title: "个人技能与软件应用",
    skills_desc: "在经营学专业课程与校内项目实践中扎实积累的实用基础技能。",
    office_title: "Microsoft Office 办公软件应用能力",
    office_sub: "具备制作报告、整理数据与演示文稿的扎实基础",
    sw_excel_desc: "数据整理与基础函数分析",
    sw_ppt_desc: "结构清晰的演示文稿构思与排版设计",
    sw_word_desc: "规范文档排版与课程论文编写",
    soft1_title: "跨文化交流与沟通",
    soft1_desc: "依托中韩双语能力实现灵活顺畅的沟通，在国际化团队中展现良好合作默契",
    soft2_title: "经营学基础思维",
    soft2_desc: "理解组织、营销及管理等基础理论，具备团队项目推进与协作意识",

    // Message
    msg_title: "欢迎随时打招呼！",
    msg_desc: "非常感谢你浏览我的个人网站。如果在校园里偶遇，请微笑着跟我打个招呼吧！",
    contact_loc: "韩国江原特别自治道春川市翰林大学街 1 (翰林大学)",
    footer_slogan: "翰林大学 · 经营学院 经营学专业"
  }
};

// 현재 언어 상태
let currentLanguage = 'ko';

/**
 * 언어 설정 함수
 * @param {string} lang ('ko' | 'zh')
 */
function setLanguage(lang) {
  if (!i18nData[lang]) return;
  currentLanguage = lang;

  // 버튼 스타일 업데이트
  document.getElementById('btn-ko').classList.toggle('active', lang === 'ko');
  document.getElementById('btn-zh').classList.toggle('active', lang === 'zh');
  document.body.className = `lang-${lang}`;

  // 텍스트 교체 (data-i18n 속성 기준)
  const elements = document.querySelectorAll('[data-i18n]');
  elements.forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (i18nData[lang][key]) {
      el.textContent = i18nData[lang][key];
    }
  });

  // 로컬 스토리지에 저장 (선택 사항)
  try {
    localStorage.setItem('zyx_pref_lang', lang);
  } catch (e) {
    // Ignore storage errors in sandbox
  }
}

// 모바일 메뉴 토글
const mobileToggle = document.getElementById('mobile-toggle');
const mobileMenu = document.getElementById('mobile-menu');

if (mobileToggle && mobileMenu) {
  mobileToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
  });
}

function closeMobileMenu() {
  if (mobileMenu) {
    mobileMenu.classList.remove('open');
  }
}

// 스크롤 시 네비게이션 효과 및 액티브 링크 갱신
window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  if (window.scrollY > 30) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }

  // 섹션 하이라이트
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-link');
  let currentSec = '';

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 140;
    const sectionHeight = section.clientHeight;
    if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
      currentSec = section.getAttribute('id');
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove('active');
    if (link.getAttribute('data-nav') === currentSec) {
      link.classList.add('active');
    }
  });
});

// 초기화
document.addEventListener('DOMContentLoaded', () => {
  // Lucide 아이콘 초기화
  if (window.lucide) {
    window.lucide.createIcons();
  }

  // 저장된 언어 복원 또는 기본 한국어
  try {
    const savedLang = localStorage.getItem('zyx_pref_lang');
    if (savedLang && (savedLang === 'ko' || savedLang === 'zh')) {
      setLanguage(savedLang);
    } else {
      setLanguage('ko');
    }
  } catch (e) {
    setLanguage('ko');
  }
});
