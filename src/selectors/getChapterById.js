import { url } from "../helpers/url";

export const getChapterById = (id) => {

    return url.find(chapter => chapter.id === id);
}