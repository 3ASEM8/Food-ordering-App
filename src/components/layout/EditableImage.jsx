import { UploadButton } from "@/libs/uploadthing";
import Image from "next/image";

export default function EditableImage({ link, setLink }) {
  return (
    <>
      {link && (
        <Image
          className="rounded-lg w-full h-full mb-1"
          src={link}
          width={250}
          height={250}
          alt={"avatar"}
        />
      )}
      {!link && (
        <div className="text-center bg-gray-200 p-4 text-gray-500 rounded-lg mb-1">
          No image
        </div>
      )}
      <div>
        <UploadButton
          endpoint="imageUploader"
          onClientUploadComplete={(res) => {
            setLink(res[0].url);
            // Do something with the response
            console.log("Files: ", res[0].url);
            // alert("Upload Completed");
          }}
          onUploadError={(error) => {
            // Do something with the error.
            alert(`ERROR! ${error.message}`);
          }}
        />
      </div>
    </>
  );
}
