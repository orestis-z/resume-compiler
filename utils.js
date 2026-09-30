export const cvChild = (titleOrObj, subtitles, meta, body, date) => {
  if (typeof titleOrObj === "object" && titleOrObj !== null) {
    return {
      title: titleOrObj.title,
      subtitles: titleOrObj.subtitles,
      meta: titleOrObj.meta,
      body: titleOrObj.body,
      date: titleOrObj.date,
    };
  }
  return {
    title: titleOrObj,
    subtitles,
    meta,
    body,
    date,
  };
};
