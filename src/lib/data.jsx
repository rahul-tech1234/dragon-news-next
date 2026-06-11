export const getCategories = async () => {
    const res = await fetch(
        "https://openapi.programming-hero.com/api/news/categories",
    );
    const category = await res.json();
    const data = await category.data.news_category;
    return data;
};

export const getNewsByCategoriesId = async (category_id) => {
    const res = await fetch(
        `https://openapi.programming-hero.com/api/news/category/${category_id}`,
    );
    const category = await res.json();
    const data = await category.data;
    return data;
};
