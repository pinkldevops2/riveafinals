const apiUrl = process.env.NEXT_PUBLIC_API_URL;
export const getBySlug = async (slug) => {
    const res = await fetch(`${apiUrl}/pages/slug/${slug}`)
    return res.json();
};

export const getMetaBySlug = async (slug) => {
    const res = await fetch(`${apiUrl}/pages/slug-meta/${slug}`)
    return res.json();
};

export const getHomePageMeta = async (slug) => {
    const res = await fetch(`${apiUrl}/pages/home-meta`)
    return res.json();
};

export const getHomePage = async (slug) => {
    const res = await fetch(`${apiUrl}/pages/home`)
    return res.json();
};
export const getMenuList = async (location) => {
    const res = await fetch(apiUrl+'/menus-list/'+location, {});
    return res.json();
};

export const getDoctorsList = async (search, speciality, language, gender, page, limit) => {
    const queryParams = new URLSearchParams({
        search,
        speciality,
        language,
        gender,
        page: page.toString(),
        limit: limit,
      });
    const res = await fetch(apiUrl+`/doctors?${queryParams}`);
    return res.json();
};

export const getDoctorSpeciality = async (location) => {
    const res = await fetch(apiUrl+'/doctors-speciality', {});
    return res.json();
};

export const submitContactForm = async (data) => {
    const res = await fetch(apiUrl+'/contact', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
    return res.json();
};

export const getResourcesList = async (search, character, page, limit) => {
    const queryParams = new URLSearchParams({
        search,
        character,
        sortColumn: 'createdAt',
        sortOrder: 'desc',
        page: page.toString(),
        limit: limit,
      });
    const res = await fetch(apiUrl+`/get-resources?${queryParams}`);
    return res.json();
};
export const getResourcesBySlug = async (slug) => {
    const res = await fetch(apiUrl+`/get-resources-by-slug/${slug}`);
    return res.json();
};

export const getCaseStudiesBySlug = async (slug) => {
    const res = await fetch(apiUrl+`/case-study/slug/${slug}`);
    return res.json();
};
export const getCaseStudyMetaBySlug = async (slug) => {
    const res = await fetch(apiUrl+`/case-study/slug-meta/${slug}`);
    return res.json();
};

export const getResourcesMetaBySlug = async (slug) => {
    const res = await fetch(`${apiUrl}/resources/slug-meta/${slug}`)
    return res.json();
};

export const getNewsBySlug = async (slug) => {
    const res = await fetch(apiUrl+`/get-news-by-slug/${slug}`);
    return res.json();
};

export const getNewsMetaBySlug = async (slug) => {
    const res = await fetch(`${apiUrl}/news/slug-meta/${slug}`)
    return res.json();
};

export const getNewsesList = async (search, category_id, page, limit) => {
    const queryParams = new URLSearchParams({
        search,
        category_id,
        sortColumn: 'createdAt',
        sortOrder: 'desc',
        page: page.toString(),
        limit: limit,
      });
    const res = await fetch(apiUrl+`/get-news?${queryParams}`);
    return res.json();
};

export const getTestimonialsList = async (search, category_id, page, limit) => {
    const queryParams = new URLSearchParams({
        search,
        category_id,
        sortColumn: 'order',
        sortOrder: 'asc',
        page: page.toString(),
        limit: limit,
      });
    const res = await fetch(apiUrl+`/get-testimonials?${queryParams}`);
    return res.json();
};
export const getSettingsByType = async (type) => {
    const res = await fetch(`${apiUrl}/get-settings?type=${type}`)
    return res.json();
};
export const getTestimonialCategory = async () => {
    const res = await fetch(`${apiUrl}/get-testimonial-categories?sortColumn=order&sortOrder=asc`)
    return res.json();
};

export const getNewsCategory = async () => {
    const res = await fetch(`${apiUrl}/get-news-categories?sortColumn=order&sortOrder=asc`)
    return res.json();
};
export const getGalleryList = async (page, limit) => {
    const queryParams = new URLSearchParams({
        sortColumn: 'order',
        sortOrder: 'asc',
        page: page.toString(),
        limit: limit,
      });
    const res = await fetch(apiUrl+`/get-full-gallery?${queryParams}`);
    return res.json();
};
export const getCaseStudyTypes = async () => {
     const queryParams = new URLSearchParams({
        sortColumn: 'order',
        sortOrder: 'asc',
      });
    const res = await fetch(`${apiUrl}/get-case-study-types?${queryParams}`)
    return res.json();
};
export const getCaseStudyCategory = async () => {
     const queryParams = new URLSearchParams({
        sortColumn: 'order',
        sortOrder: 'asc',
      });
    const res = await fetch(`${apiUrl}/case-study-categories-by-type?${queryParams}`)
    return res.json();
};
export const getCaseStudyCategoryPost = async () => {
     const queryParams = new URLSearchParams({
        sortColumn: 'order',
        sortOrder: 'asc',
        page: 1,
        limit: 100,
      });
    const res = await fetch(`${apiUrl}/get-case-studies?${queryParams}`)
    return res.json();
};