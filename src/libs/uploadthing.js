import {
  generateUploadButton,
  generateUploadDropzone,
} from "@uploadthing/react";

// قم بإزالة تعريف النوع واستبدله بتعريف استيراد عادي
// import { OurFileRouter } from "~/app/api/uploadthing/core"; // لا حاجة لهذا الاستيراد في JavaScript

export const UploadButton = generateUploadButton();
export const UploadDropzone = generateUploadDropzone();
