import {
  RiDeleteBinLine,
  RiFileExcel2Line,
  RiFileLine,
  RiFilePdf2Line,
  RiFilePpt2Line,
  RiFileWord2Line,
  RiFileZipLine,
  RiImageLine,
  RiMusic2Line,
  RiVideoLine,
} from "@remixicon/react";
import { ReactNode } from "react";

interface FileUploadPreviewProps {
  index: number;
  file: File;
  children?: ReactNode;
  onDelete?: (index: number) => void;
}

const getIconForMimeType = (fileName: string) => {
  const extension = fileName.split(".").pop()?.toLowerCase();

  let iconComponent: JSX.Element;
  switch (extension) {
    // Images
    case "jpg":
    case "jpeg":
    case "png":
    case "gif":
    case "svg":
    case "webp":
    case "bmp":
    case "ico":
    case "tif":
    case "tiff":
    case "heic":
    case "heif":
    case "avif":
      iconComponent = <RiImageLine className="text-primary-600 w-12 h-12" />;
      break;

    // Audio
    case "mp3":
    case "wav":
    case "ogg":
    case "m4a":
    case "aac":
    case "flac":
    case "wma":
    case "opus":
    case "aiff":
      iconComponent = <RiMusic2Line className="text-primary-600 w-12 h-12" />;
      break;

    // Video
    case "mp4":
    case "avi":
    case "mkv":
    case "mov":
    case "wmv":
    case "flv":
    case "webm":
    case "m4v":
    case "mpg":
    case "mpeg":
    case "3gp":
      iconComponent = <RiVideoLine className="text-primary-600 w-12 h-12" />;
      break;

    // Spreadsheets / data
    case "xls":
    case "xlsx":
    case "xlsm":
    case "xlsb":
    case "csv":
    case "tsv":
    case "txt":
    case "ods":
    case "numbers":
      iconComponent = (
        <RiFileExcel2Line className="text-primary-600 w-12 h-12" />
      );
      break;

    // Documents
    case "doc":
    case "docx":
    case "dot":
    case "dotx":
    case "odt":
    case "rtf":
    case "pages":
    case "xml":
      iconComponent = (
        <RiFileWord2Line className="text-primary-600 w-12 h-12" />
      );
      break;

    // Presentations
    case "ppt":
    case "pptx":
    case "pptm":
    case "pps":
    case "ppsx":
    case "potx":
    case "odp":
    case "key":
    case "xps":
      iconComponent = <RiFilePpt2Line className="text-primary-600 w-12 h-12" />;
      break;

    // Archives
    case "rar":
    case "zip":
    case "7z":
    case "tar":
    case "gz":
    case "tgz":
    case "bz2":
      iconComponent = <RiFileZipLine className="text-primary-600 w-12 h-12" />;
      break;

    case "pdf":
      iconComponent = <RiFilePdf2Line className="text-primary-600 w-12 h-12" />;
      break;

    default:
      // Return generic file icon
      iconComponent = <RiFileLine className="text-primary-600 w-12 h-12" />;
      break;
  }
  return iconComponent;
};

const FileUploadPreview = ({
  index,
  file,
  children,
  onDelete,
}: FileUploadPreviewProps) => {
  return (
    <div className="px-4 py-3 border border-gray-300 rounded-lg flex items-center justify-between gap-5">
      <div className="flex items-center gap-2 w-full">
        {getIconForMimeType(file.name)}
        <div className="flex flex-col gap-1 w-full">
          <p className="text-sm line-clamp-2 break-all text-gray-900 font-medium">
            {file.name}
          </p>
          {children && <div className="w-full">{children}</div>}
        </div>
      </div>
      <button type="button" onClick={() => onDelete?.(index)}>
        <RiDeleteBinLine className="text-error-500 w-5 h-5 cursor-pointer" />
      </button>
    </div>
  );
};

export default FileUploadPreview;
