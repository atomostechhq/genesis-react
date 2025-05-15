import Button from "./components/Button";
import {
  RiAddLine,
  RiAlertFill,
  RiCheckLine,
  RiCircleFill,
  RiFilterLine,
  RiGlobalLine,
  RiInformation2Line,
  RiListCheck,
  RiLogoutBoxRLine,
  RiMailLine,
  RiSearch2Line,
  RiStackLine,
  RiTimeFill,
} from "@remixicon/react";
import Chip from "./components/Chip";
import Divider from "./components/Divider";
import Toggle from "./components/Toggle";
import Label from "./components/Label";
import { Avatar, AvatarGroup, Checkbox, DatePicker } from "./components";
import HelperText from "./components/HelperText";
import Radio from "./components/Radio";
import Input from "./components/Input";
import { cn } from "./utils";
import { ChangeEvent, useEffect, useState } from "react";
import Dropdown from "./components/Dropdown";
import DropdownWithIcon from "./components/DropdownWithIcon";
import TabsContainer, { Tab, TabList, TabPanel } from "./components/Tabs";
import Modal from "./components/Modal";
import Notice from "./components/Notice";
import FileUpload from "./components/FileUpload";
import ProgressBar from "./components/Progress";
import Tooltip from "./components/Tooltip";
import Skeleton from "./components/Skeleton";
import Stepper from "./components/Stepper";
import Textarea from "./components/Textarea";
import Loading from "./components/Loading";
import Sidebar from "./components/Sidebar";
import Breadcrumbs from "./components/Breadcrumbs";
import { Link, useLocation } from "react-router-dom";
import DateRangePicker from "./components/DateRangePicker";
import { DateRange } from "react-day-picker";
import {
  startOfToday,
  subMonths,
} from "date-fns";
import CircularProgress from "./components/CircularProgress";
import GlobalNavigation from "./components/GlobalNavigation";
import Slider from "./components/Slider";
import Accordion, {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./components/Accordion";
import MenuDropdown, { MenuItem, MenuSubItem } from "./components/MenuItem";
import ListItem from "./components/ListItem";

interface Option {
  label: string;
  value: string;
}

const GlobalNavigationComponent = () => {
  return (
    <>
      <div>
        <p className="h-14 w-14 rounded-full text-lg border flex justify-center items-center">
          JD
        </p>
      </div>
      <div className="text-center text-gray-900">
        <p className="text-base font-semibold w-[250px] whitespace-nowrap text-ellipsis overflow-hidden block">
          John Doe
        </p>
        <HelperText
          size="sm"
          className="w-[250px] whitespace-nowrap text-ellipsis overflow-hidden block"
        >
          john.doe@email.com
        </HelperText>
      </div>
      <Divider />
      <Button
        className="w-full"
        variant="outlined"
        intent="default-outlined"
        size={"sm"}
        fullWidth
        startIcon={<RiLogoutBoxRLine size={20} />}
      >
        Logout
      </Button>
    </>
  );
};

const Test = () => {
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState("");

  // label
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
    // Validate the input value
    if (value.length < 5) {
      setError("Input must be at least 5 characters long");
    } else {
      setError("");
    }
  };

  const [multiSelect, setMultiSelect] = useState<Option[]>([]);

  const [singleSelect, setSingleSelect] = useState<Option[]>([]);

  const ImageSrc =
    "https://images.unsplash.com/photo-1732157582696-b5cb6c3d73bd?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  const ImageSrc2 =
    "https://images.unsplash.com/photo-1540206395-68808572332f?q=80&w=2626&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  const singleOptions = [
    { label: "Option 1", value: "1" },
    { label: "Option 2", value: "2" },
    { label: "Option 3", value: "3" },
  ];

  const multiOptions = [
    {
      label: "appleeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
      value: "apple",
      info: "Modals",
      addInfo: "Be a direct child descendent of the modal.",
      tooltipContent: "hjsghjwg",
      disabledOption:true
    },
    {
      label: "banana",
      value: "banana",
      addInfo: "jdhjaldh",
      disabledOption: true,
    },
    { label: "strawberry", value: "strawberry" },
    { label: "kiwi", value: "kiwi", info: "info4" },
    {
      label: "orangeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
      value: "orange",
      tooltipContent: "lower-level components:",
    },
    { label: "grapes", value: "grapes" },
    { label: "melon", value: "melon" },
    { label: "mango", value: "mango" },
  ];

  const [dropdownMenuOption, setDropdownMenuOption] = useState<Option[]>([]);

  const [dropdownMenuOptionTwo, setDropdownMenuOptionTwo] = useState<Option[]>(
    []
  );

  // tabs
  const [value, setValue] = useState("1");

  const handleTabChange = (newValue: string) => {
    setValue(newValue);
  };

  // modal
  const [showModal, setShowModal] = useState(false);

  // notice
  const [open, setOpen] = useState(false);
  // progress bar
  const [progress, setProgress] = useState(0);

  // single file upload
  const [selectedSingleFiles, setSelectedSingleFiles] = useState<File[]>([]);

  // sidebar
  const [collapsed, setCollapsed] = useState(true);
  const location = useLocation();
  const currentPath = location.pathname;

  const handleFileChangeSingle = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      // Add both file objects and file names to the state
      const newFiles = Array.from(files);
      setSelectedSingleFiles((prevFiles) => [...prevFiles, ...newFiles]);
    }
  };
  const handleDeleteFileSingle = (file: string | File) => {
    setSelectedSingleFiles((prevFiles) => prevFiles.filter((f) => f !== file));
  };

  // multiple file upload
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);

  const handleFileChangeMultiple = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      // Add both file objects and file names to the state
      const newFiles = Array.from(files);
      setSelectedFiles((prevFiles) => [...prevFiles, ...newFiles]);
    }
  };

  const handleDeleteFile = (file: string | File) => {
    setSelectedFiles((prevFiles) => prevFiles.filter((f) => f !== file));
  };

  // Stepper
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [isComplete, setIsComplete] = useState<boolean>(false);

  const stepsConfig = [
    {
      name: "Step Name One",
      helperName: "step1",
      Component: () => <div>Step 1 Component</div>,
    },
    {
      name: "Step Name Two",
      helperName: "step2",
      Component: () => <div>Step 2 Component</div>,
    },
    {
      name: "Step Name Three",
      helperName: "step3",
      Component: () => <div>Step 3 Component</div>,
    },
    {
      name: "Step Name Four",
      helperName: "step4",
      Component: () => <div>Step 4 Component</div>,
    },
  ];

  const navItems = [
    {
      label: "Page",
      items: [
        {
          label: "Home",
          href: "/",
          icon: <RiCircleFill size={18} />,
        },
        {
          label: "Team",
          href: "/pages/team",
          icon: <RiAlertFill size={18} />,
        },
      ],
    },
    {
      label: "Page",
      items: [
        {
          label: "Dashboard",
          href: "/pages/dashboard",
          icon: <RiCircleFill size={18} />,
        },
        {
          label: "Team",
          href: "/pages/team",
          icon: <RiAlertFill size={18} />,
        },
      ],
    },
    {
      label: "Page",
      items: [
        {
          label: "Dashboard",
          href: "/pages/dashboard",
          icon: <RiCircleFill size={18} />,
        },
        {
          label: "Team",
          href: "/pages/team",
          icon: <RiAlertFill size={18} />,
        },
      ],
    },
    {
      label: "Page",
      items: [
        {
          label: "Dashboard",
          href: "/pages/dashboard",
          icon: <RiCircleFill size={18} />,
        },
        {
          label: "Team",
          href: "/pages/team",
          icon: <RiAlertFill size={18} />,
        },
      ],
    },
    {
      label: "Page",
      items: [
        {
          label: "Dashboard",
          href: "/pages/dashboard",
          icon: <RiCircleFill size={18} />,
        },
        {
          label: "Team",
          href: "/pages/team",
          icon: <RiAlertFill size={18} />,
        },
      ],
    },
    {
      label: "Settings",
      items: [
        {
          label: "Setting 1",
          href: "/setting1",
          icon: <RiAlertFill size={18} />,
        },
        {
          label: "Setting 2",
          href: "/setting2",
          icon: <RiCircleFill size={18} />,
        },
      ],
    },
    {
      label: "Settings",
      items: [
        {
          label: "Setting 1",
          href: "/setting1",
          icon: <RiAlertFill size={18} />,
        },
        {
          label: "Subitem 2",
          href: "/subitem2",
          icon: <RiAlertFill size={18} />,
        },
        {
          label: "Setting 2",

          href: "/setting2",
          icon: <RiCircleFill size={18} />,
        },
      ],
    },
  ];

  const footerItems = [
    {
      label: "Footer Item 1",
      items: [
        {
          label: "Subitem 3",
          href: "/subitem3",
          icon: <RiAlertFill size={18} />,
        },
      ],
    },
  ];

  const handleNext = () => {
    setCurrentStep((prevStep) => {
      if (prevStep === stepsConfig.length) {
        setIsComplete(true);
        return prevStep;
      } else {
        return prevStep + 1;
      }
    });
  };

  const handlePrev = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  useEffect(() => {
    const timer = setTimeout(() => setProgress(80), 2000);
    return () => clearTimeout(timer);
  }, [progress]);

  // global navigation
  const [isOpen, setIsOpen] = useState(false);

  // slider
  const [sliderValue, setSliderValue] = useState<number>(50);

  const handleSliderChange = (value: number) => {
    setSliderValue(value);
  };

  // single date picker
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);

  // date range picker
  const [selectedRange, setSelectedRange] = useState<DateRange | undefined>();

  const handleRangeSelect = (range: DateRange | undefined) => {
    setSelectedRange(range);
  };

  const applyPreset = (
    preset: "today" | "last1Months" | "last3Months" | "last6Months"
  ) => {
    let fromDate;
    const toDate = new Date(); // End date is always today

    switch (preset) {
      case "today":
        fromDate = startOfToday();
        break;
      case "last1Months":
        fromDate = subMonths(toDate, 1);
        break;
      case "last3Months":
        fromDate = subMonths(toDate, 3);
        break;
      case "last6Months":
        fromDate = subMonths(toDate, 6);
        break;
      default:
        return;
    }

    setSelectedRange({ from: fromDate, to: toDate });
  };

  return (
    <div className="m-4">
      <div className="mt-10 flex gap-10">
        <section>
          <h1 className="text-primary-600 border-b border-primary-900 w-fit">
            Typography - Font Size
          </h1>
          <h1 className="text-display-2xl">Display 2xl</h1>
          <h1 className="text-display-xl">Display xl</h1>
          <h1 className="text-display-lg">Display lg</h1>
          <h1 className="text-display-md">Display md</h1>
          <h1 className="text-display-sm">Display sm</h1>
          <h1 className="text-display-xs">Display xs</h1>
          <h1 className="text-text-xl">Text Xl</h1>
          <h1 className="text-text-lg">Text Lg</h1>
          <h1 className="text-text-md">Text Md</h1>
          <h1 className="text-text-sm">Text Sm</h1>
          <h1 className="text-text-xs">Text Xs</h1>
        </section>
        <section>
          <h1 className="text-primary-600 border-b border-primary-900 w-fit">
            Typography - Font Weight
          </h1>
          <h1 className="font-regular">Regular</h1>
          <h1 className="font-medium">Medium</h1>
          <h1 className="font-semibold">Semi Bold</h1>
          <h1 className="font-bold">Bold</h1>
        </section>
      </div>
      <div className="flex flex-col gap-5">
        <h1 className="text-display-sm text-primary-600">Button:</h1>
        <section className="my-2">
          <h1>Full width:</h1>
          <Button variant="filled" fullWidth>
            Full width
          </Button>
        </section>
        <section className="flex items-center gap-4 my-2">
          <h1>Variants:</h1>
          <Button variant="filled">Filled</Button>
          <Button variant="outlined">Outlined</Button>
        </section>
        <section className="flex items-center gap-4 my-2">
          <h1>Disabled:</h1>
          <Button variant="filled" disabled>
            Filled
          </Button>
          <Button variant="outlined" disabled>
            Outlined
          </Button>
        </section>
        <section className="flex items-center gap-4">
          <h1>Size:</h1>
          <Button variant="filled" intent={"default"} size="sm">
            Size sm
          </Button>
          <Button variant="filled" intent={"error"} size="md">
            Size md
          </Button>
          <Button variant="filled" intent={"primary"} size="lg">
            Size lg
          </Button>
        </section>
        <section className="flex items-center gap-4">
          <h1>States Filled:</h1>
          <Button variant="filled" intent={"default"}>
            Default
          </Button>
          <Button variant="filled" intent={"error"}>
            Error
          </Button>
          <Button variant="filled" intent={"primary"}>
            Primary
          </Button>
          <Button variant="filled" intent={"success"}>
            Success
          </Button>
          <Button variant="filled" intent={"warning"}>
            Warning
          </Button>
        </section>
        <section className="flex items-center gap-4">
          <h1>States Outlined:</h1>
          <Button variant="outlined" intent="default-outlined">
            Default
          </Button>
          <Button variant="outlined" intent="error-outlined">
            Error
          </Button>
          <Button variant="outlined" intent="primary-outlined">
            Primary
          </Button>
          <Button variant="outlined" intent="success-outlined">
            Success
          </Button>
          <Button variant="outlined" intent="warning-outlined">
            Warning
          </Button>
        </section>
        <section className="flex items-center gap-4">
          <Button
            variant="filled"
            startIcon={<RiAlertFill size={20} />}
            endIcon={<RiListCheck size={20} />}
          >
            Filled With Icons
          </Button>
          <Button
            variant="outlined"
            startIcon={<RiAlertFill size={20} />}
            endIcon={<RiListCheck size={20} />}
          >
            Outlined With Icons
          </Button>
          <Button
            variant={"outlined"}
            intent={"default-outlined"}
            className="border-none"
          >
            Custom Button
          </Button>
        </section>
      </div>

      {/* Chips  */}
      <div className="space-y-5">
        <h1 className="text-display-sm text-primary-600">Chip:</h1>
        <section className="flex items-center gap-4">
          <p>Chips with sizes</p>
          <Chip intent="primary" size={"sm"}>
            Size sm
          </Chip>
          <Chip intent="primary" size={"md"}>
            Size md
          </Chip>
          <Chip intent="primary" size={"lg"}>
            Size lg
          </Chip>
        </section>
        <section className="flex items-center gap-4">
          <p>Chips with dot</p>
          <Chip intent="primary" dot dotColor="bg-red-400">
            primary
          </Chip>
          <Chip dot intent="warning">
            warning
          </Chip>
          <Chip dot intent="success">
            success
          </Chip>
          <Chip dot intent="error">
            error
          </Chip>
          <Chip dot intent="default">
            default
          </Chip>
        </section>
        <section className="flex items-center gap-4">
          <p>Chips without dot</p>
          <Chip intent="primary">primary</Chip>
          <Chip intent="warning">warning</Chip>
          <Chip intent="success">success</Chip>
          <Chip intent="error">error</Chip>
          <Chip intent="default">default</Chip>
        </section>
      </div>

      {/* Divider */}
      <section>
        <h1 className="text-display-sm text-primary-600">Divider</h1>
        <div className="w-[50%] border border-primary-600 p-5 flex justify-center gap-6 items-center">
          <Divider
            position="vertical"
            height="200px"
            className="my-4 border-red-600"
          />
          <Divider position="horizontal" className="my-4" />
        </div>
      </section>

      {/* Toggle  */}
      <div className="flex flex-col gap-5 my-5">
        <h1 className="text-display-sm text-primary-600">Toggle:</h1>
        <section className="flex items-center gap-4">
          <h1>Size:</h1>
          <Toggle size="sm" />
          <Toggle size="md" />
          <Toggle size="lg" checked readOnly />
        </section>
        <section className="flex items-center gap-4">
          <h1>Variants:</h1>
          <Toggle size="md" intent={"primary"} />
          <Toggle size="md" intent={"success"} />
        </section>
        <section className="flex items-center gap-4">
          <h1>With Labels:</h1>
          <div className="flex items-center gap-2">
            <Label htmlFor="primary">On</Label>
            <Toggle size="md" id="primary" intent={"primary"} />
          </div>
          <div className="flex items-center gap-2">
            <Toggle size="md" id="success" intent={"success"} />
            <Label htmlFor="success">Success</Label>
          </div>
        </section>
      </div>

      {/* checkbox */}
      <div className="flex flex-col gap-1 my-5">
        <h1 className="text-display-sm text-primary-600">Checkbox:</h1>
        <section className="flex items-center gap-4">
          <h1>Size with Text:</h1>
          <div className="flex items-center gap-2">
            <Checkbox id="xl" size="xl" />
            <Label htmlFor="xl">XL</Label>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="large" size="lg" />
            <Label htmlFor="large">Large</Label>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="small" size="sm" />
            <Label htmlFor="small">Small</Label>
          </div>
        </section>
        <section className="flex items-center gap-4">
          <h1>States:</h1>
          <div className="flex items-center gap-2">
            <Checkbox id="disable" size="lg" disabled />
            <Label disabled htmlFor="disable">
              Disabled
            </Label>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="check" size="lg" checked aria-readonly />
            <Label htmlFor="check">Checked</Label>
          </div>
        </section>
        <section className="flex items-center gap-4">
          <h1>Checkbox with Text and Subtext: </h1>
          <div className="flex items-start gap-2">
            <Checkbox id="smallText" size="sm" />
            <div className="flex flex-col -mt-1">
              <Label htmlFor="smallText">Text with small checkbox</Label>
              <HelperText size="sm">This is a helper text</HelperText>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <Checkbox id="largeText" size="lg" />
            <div className="flex flex-col -mt-1">
              <Label htmlFor="largeText">Text with large checkbox</Label>
              <HelperText size="lg">This is a helper text</HelperText>
            </div>
          </div>
        </section>
      </div>

      {/* Radio */}
      <div className="flex flex-col gap-1 my-5">
        <h1 className="text-display-sm text-primary-600">Radio:</h1>
        <section className="flex items-center gap-4">
          <h1>Size with Text:</h1>
          <div className="flex items-center gap-2">
            <Radio id="radioTextLarge" size="lg" />
            <Label htmlFor="radioTextLarge" required>
              Large
            </Label>
          </div>
          <div className="flex items-center gap-2">
            <Radio id="radioTextSmall" size="sm" />
            <Label htmlFor="radioTextSmall">Small</Label>
          </div>
        </section>
        <section className="flex items-center gap-4">
          <h1>States:</h1>
          <div className="flex items-center gap-2">
            <Radio id="disable" size="lg" disabled />
            <Label disabled htmlFor="disable">
              Disabled
            </Label>
          </div>
          <div className="flex items-center gap-2">
            <Radio id="check" size="lg" readOnly checked />
            <Label htmlFor="check">Checked</Label>
          </div>
        </section>
        <section className="flex items-center gap-4">
          <h1>Radio with Text and Subtext: </h1>
          <div className="flex items-start gap-2">
            <Radio name="radioWithText" id="smallRadio" size="sm" />
            <div className="flex flex-col -mt-1">
              <Label htmlFor="smallRadio">Text with small radio button</Label>
              <HelperText size="sm">This is a helper text</HelperText>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <Radio name="radioWithText" id="largeRadio" size="lg" />
            <div className="flex flex-col -mt-1">
              <Label htmlFor="largeRadio">Text with large radio button</Label>
              <HelperText size="lg">This is a helper text</HelperText>
            </div>
          </div>
        </section>
      </div>

      {/* <Input /> */}
      <div className="flex flex-col gap-1 my-5">
        <h1 className="text-display-sm text-primary-600">Input Field:</h1>
        <section className="flex items-center gap-4">
          <h1>Size with Text:</h1>
          <div className="w-[500px]">
            <Label required htmlFor="">
              Email
            </Label>
            <Input type="text" placeholder="olivia@untitledui.com" />
            <HelperText size="sm">This is a hint text to help user.</HelperText>
          </div>
          <div>
            <Label required htmlFor="">
              Email
            </Label>
            <Input type="text" size="lg" placeholder="olivia@untitledui.com" />
            <HelperText size="lg">This is a hint text to help user.</HelperText>
          </div>
        </section>
        <section className="flex items-center gap-4">
          <h1>States:</h1>
          <Input
            type="text"
            startIcon={<RiMailLine size={16} />}
            size="lg"
            placeholder="olivia@untitledui.com"
          />
          <Input
            type="text"
            disabled
            size="lg"
            placeholder="olivia@untitledui.com"
          />
          <div>
            <Label required htmlFor="">
              Email
            </Label>
            <Input
              size="lg"
              value={inputValue}
              type="text"
              onChange={handleChange}
              endIcon={
                <RiListCheck
                  size={16}
                  className={cn(error && "text-error-500")}
                />
              }
              className={cn(error && "focus-within:border-error-500")}
              placeholder="olivia@untitledui.com"
            />
            {error && (
              <HelperText className="text-error-500">{error}</HelperText>
            )}
          </div>
        </section>
      </div>

      {/* Avatar */}
      <section className="my-10 space-y-2">
        <h1 className="text-display-sm text-primary-600">Avatar:</h1>
        <div className="flex items-center gap-5">
          <Avatar
            type="text"
            size="sm"
            className="border border-gray-300 rounded-full"
            text="RV"
          />
          <Avatar
            border
            borderColor="var(--primary-500)"
            className="bg-primary-50"
            borderWidth="2px"
            rounded
            type="text"
            size="md"
            disabled
            text="Riya Vishwakarma"
          />
          <Avatar border rounded type="text" size="lg" text="RV" />
          <Avatar
            border
            rounded
            type="icon"
            size="sm"
            className="text-gray-600"
            icon={<RiLogoutBoxRLine size={14} />}
          />
          <Avatar
            type="image"
            size="sm"
            src={ImageSrc}
            alt="avatar"
            rounded
            statusIcon={
              <RiTimeFill
                size={14}
                className="text-warning-400 bg-white rounded-full"
              />
            }
            statusPosition="bottom-right"
          />
          <Avatar
            type="image"
            size="md"
            border
            rounded
            onClick={() => alert("clicked")}
            borderWidth="2px"
            src={ImageSrc}
            className="cursor-pointer"
            borderColor="var(--success-500)"
            alt="avatar"
            statusIcon={
              <RiCheckLine
                size={16}
                className="bg-success-500 rounded-full text-white"
              />
            }
            statusPosition="bottom-right"
          />
          <Avatar
            src={ImageSrc}
            type="image"
            size="lg"
            rounded
            border
            borderColor="var(--error-300)"
            borderWidth="2px"
            alt="avatar"
            statusIcon={
              <RiCircleFill size={18} className="text-error-500 rounded-full" />
            }
            statusPosition="bottom-right"
          />
        </div>
        <h1 className="text-display-sm text-primary-600">
          Avatar Positions/Size:
        </h1>
        <div className="flex items-center gap-5">
          <h2 className="text-display-sm text-primary-600">Avatar Small:</h2>
          <Avatar
            type="text"
            text="AV"
            border
            borderColor="var(--primary-500)"
            borderWidth="2px"
            size="sm"
            rounded
            statusIcon={
              <RiTimeFill
                size={14}
                className="text-warning-400 bg-white rounded-full"
              />
            }
            statusPosition="bottom-right"
          />
          <Avatar
            type="icon"
            size="sm"
            icon={<RiCheckLine />}
            border
            rounded
            onClick={() => alert("clicked")}
            borderWidth="2px"
            className="cursor-pointer"
            borderColor="var(--success-500)"
            statusIcon={
              <RiCheckLine
                size={14}
                className="bg-success-500 rounded-full text-white"
              />
            }
            statusPosition="top-right"
          />
          <Avatar
            type="text"
            text="AV"
            border
            borderColor="var(--primary-500)"
            borderWidth="2px"
            size="sm"
            rounded
            statusIcon={
              <RiTimeFill
                size={14}
                className="text-warning-400 bg-white rounded-full"
              />
            }
            statusPosition="bottom-left"
          />
          <Avatar
            type="text"
            text="AV"
            border
            borderColor="var(--primary-500)"
            borderWidth="2px"
            size="sm"
            rounded
            statusIcon={
              <RiTimeFill
                size={14}
                className="text-warning-400 bg-white rounded-full"
              />
            }
            statusPosition="top-left"
          />
          <Avatar
            src={ImageSrc}
            type="image"
            size="sm"
            rounded
            border
            borderColor="var(--error-300)"
            borderWidth="2px"
            alt="avatar"
            statusIcon={
              <RiCircleFill size={14} className="text-error-500 rounded-full" />
            }
            statusPosition="bottom-left"
          />
          <Avatar
            src={ImageSrc}
            type="image"
            size="sm"
            rounded
            border
            borderColor="var(--error-300)"
            borderWidth="2px"
            alt="avatar"
            statusIcon={
              <RiCircleFill size={14} className="text-error-500 rounded-full" />
            }
            statusPosition="top-left"
          />
          <Avatar
            src={ImageSrc}
            type="image"
            size="sm"
            rounded
            border
            borderColor="var(--error-300)"
            borderWidth="2px"
            alt="avatar"
            statusIcon={
              <RiCircleFill size={14} className="text-error-500 rounded-full" />
            }
            statusPosition="bottom-right"
          />
          <Avatar
            src={ImageSrc}
            type="image"
            size="sm"
            rounded
            border
            borderColor="var(--error-300)"
            borderWidth="2px"
            alt="avatar"
            statusIcon={
              <RiCircleFill size={14} className="text-error-500 rounded-full" />
            }
            statusPosition="top-right"
          />
        </div>
        <div className="flex items-center gap-5">
          <h2 className="text-display-sm text-primary-600">Avatar Medium:</h2>
          <Avatar
            type="text"
            text="AV"
            border
            borderColor="var(--primary-500)"
            borderWidth="2px"
            size="md"
            rounded
            statusIcon={
              <RiTimeFill
                size={16}
                className="text-warning-400 bg-white rounded-full"
              />
            }
            statusPosition="bottom-right"
          />
          <Avatar
            type="icon"
            size="md"
            icon={<RiCheckLine />}
            border
            rounded
            onClick={() => alert("clicked")}
            borderWidth="2px"
            className="cursor-pointer"
            borderColor="var(--success-500)"
            statusIcon={
              <RiCheckLine
                size={16}
                className="bg-success-500 rounded-full text-white"
              />
            }
            statusPosition="top-right"
          />
          <Avatar
            type="text"
            text="AV"
            border
            borderColor="var(--primary-500)"
            borderWidth="2px"
            size="md"
            rounded
            statusIcon={
              <RiTimeFill
                size={16}
                className="text-warning-400 bg-white rounded-full"
              />
            }
            statusPosition="bottom-left"
          />
          <Avatar
            type="text"
            text="AV"
            border
            borderColor="var(--primary-500)"
            borderWidth="2px"
            size="md"
            rounded
            statusIcon={
              <RiTimeFill
                size={16}
                className="text-warning-400 bg-white rounded-full"
              />
            }
            statusPosition="top-left"
          />
          <Avatar
            src={ImageSrc}
            type="image"
            size="md"
            rounded
            border
            borderColor="var(--error-300)"
            borderWidth="2px"
            alt="avatar"
            statusIcon={
              <RiCircleFill size={16} className="text-error-500 rounded-full" />
            }
            statusPosition="bottom-left"
          />
          <Avatar
            src={ImageSrc}
            type="image"
            size="md"
            rounded
            border
            borderColor="var(--error-300)"
            borderWidth="2px"
            alt="avatar"
            statusIcon={
              <RiCircleFill size={16} className="text-error-500 rounded-full" />
            }
            statusPosition="bottom-right"
          />
          <Avatar
            src={ImageSrc}
            type="image"
            size="md"
            rounded
            border
            borderColor="var(--error-300)"
            borderWidth="2px"
            alt="avatar"
            statusIcon={
              <RiCircleFill size={16} className="text-error-500 rounded-full" />
            }
            statusPosition="top-left"
          />
          <Avatar
            src={ImageSrc}
            type="image"
            size="md"
            rounded
            border
            borderColor="var(--error-300)"
            borderWidth="2px"
            alt="avatar"
            statusIcon={
              <RiCircleFill size={16} className="text-error-500 rounded-full" />
            }
            statusPosition="top-right"
          />
        </div>
        <div className="flex items-center gap-5">
          <h2 className="text-display-sm text-primary-600">Avatar Large:</h2>
          <Avatar
            type="icon"
            size="lg"
            icon={<RiCheckLine />}
            border
            rounded
            onClick={() => alert("clicked")}
            borderWidth="2px"
            className="cursor-pointer"
            borderColor="var(--success-500)"
            statusIcon={
              <RiCheckLine
                size={18}
                className="bg-success-500 rounded-full text-white"
              />
            }
            statusPosition="bottom-right"
          />
          <Avatar
            type="icon"
            size="lg"
            icon={<RiCheckLine />}
            border
            rounded
            onClick={() => alert("clicked")}
            borderWidth="2px"
            className="cursor-pointer"
            borderColor="var(--success-500)"
            statusIcon={
              <RiCheckLine
                size={18}
                className="bg-success-500 rounded-full text-white"
              />
            }
            statusPosition="top-right"
          />
          <Avatar
            type="text"
            text="AV"
            border
            borderColor="var(--primary-500)"
            borderWidth="2px"
            size="lg"
            rounded
            statusIcon={
              <RiTimeFill
                size={18}
                className="text-warning-400 bg-white rounded-full"
              />
            }
            statusPosition="bottom-left"
          />
          <Avatar
            type="text"
            text="AV"
            border
            borderColor="var(--primary-500)"
            borderWidth="2px"
            size="lg"
            rounded
            statusIcon={
              <RiTimeFill
                size={18}
                className="text-warning-400 bg-white rounded-full"
              />
            }
            statusPosition="top-left"
          />
          <Avatar
            src={ImageSrc}
            type="image"
            size="lg"
            rounded
            border
            borderColor="var(--error-300)"
            borderWidth="2px"
            alt="avatar"
            statusIcon={
              <RiCircleFill size={18} className="text-error-500 rounded-full" />
            }
            statusPosition="bottom-left"
          />
          <Avatar
            src={ImageSrc}
            type="image"
            size="lg"
            rounded
            border
            borderColor="var(--error-300)"
            borderWidth="2px"
            alt="avatar"
            statusIcon={
              <RiCircleFill size={18} className="text-error-500 rounded-full" />
            }
            statusPosition="bottom-right"
          />
          <Avatar
            src={ImageSrc}
            type="image"
            size="lg"
            rounded
            border
            borderColor="var(--error-300)"
            borderWidth="2px"
            alt="avatar"
            statusIcon={
              <RiCircleFill size={18} className="text-error-500 rounded-full" />
            }
            statusPosition="top-left"
          />
          <Avatar
            src={ImageSrc}
            type="image"
            size="lg"
            rounded
            border
            borderColor="var(--error-300)"
            borderWidth="2px"
            alt="avatar"
            statusIcon={
              <RiCircleFill size={18} className="text-error-500 rounded-full" />
            }
            statusPosition="top-right"
          />
        </div>
        <AvatarGroup
          avatars={[
            {
              type: "image",
              src: ImageSrc2,
              rounded: true,
              border: true,
              borderWidth: "2px",
              borderColor: "var(--primary-500)",
            },
            {
              type: "image",
              src: ImageSrc2,
              rounded: true,
              border: true,
              borderWidth: "2px",
              borderColor: "var(--primary-500)",
            },
            {
              type: "image",
              src: ImageSrc2,
              rounded: true,
              border: true,
              borderWidth: "2px",
              borderColor: "var(--primary-500)",
            },
            {
              type: "image",
              src: ImageSrc2,
              rounded: true,
              border: true,
              borderWidth: "2px",
              borderColor: "var(--primary-500)",
            },
            {
              type: "image",
              src: ImageSrc2,
              rounded: true,
              border: true,
              borderWidth: "2px",
              borderColor: "var(--primary-500)",
            },
            {
              type: "image",
              src: ImageSrc2,
              rounded: true,
              border: true,
              borderWidth: "2px",
              borderColor: "var(--primary-500)",
            },
          ]}
          size="md"
          max={4}
        />
      </section>

      {/* Slider */}
      <div className="space-y-6">
        <h1 className="text-display-sm text-primary-600">Slider:</h1>
        <Slider
          value={sliderValue}
          min={10}
          max={100}
          onChange={(e) => handleSliderChange(Number(e.target.value))}
        />
        <Slider
          value={sliderValue}
          min={10}
          step={10}
          max={100}
          size="lg"
          onChange={(e) => handleSliderChange(Number(e.target.value))}
        />
      </div>

      {/* Accordian */}
      <section className="space-y-5">
        <h1 className="text-display-sm text-primary-600">Accordian:</h1>
        <div className="space-y-2">
          <h2>Accordian Single</h2>
          <Accordion type="single" collapsible className="w-full space-y-2">
            <AccordionItem value="item-1">
              <AccordionTrigger defaultOpen={true}>
                <p className="">
                  {" "}
                  What is your favorite template from BRIX Templates?
                </p>
              </AccordionTrigger>
              <AccordionContent>
                <div className="p-6 border">
                  {` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.`}
                  <Input type="text" />
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger defaultOpen={true}>
                Is it styled?
              </AccordionTrigger>
              <AccordionContent>
                {` Yes. It comes with default styles that match the other components'
              aesthetic.`}
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger defaultOpen={true}>
                Is it animated?
              </AccordionTrigger>
              <AccordionContent>
                {` Yes. It's animated by default, but you can disable it if you
              prefer.`}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        <div className="space-y-2">
          <h2>Accordian Multiple</h2>
          <Accordion type="multiple" collapsible className="w-full space-y-2">
            <AccordionItem value="item-1">
              <AccordionTrigger
                className="text-yellow-500"
                triggerIcon={<RiAlertFill />}
              >
                What is your favorite template from BRIX Templates?
              </AccordionTrigger>
              <AccordionContent>
                {` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.`}
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Is it styled?</AccordionTrigger>
              <AccordionContent>
                {` Yes. It comes with default styles that match the other components'
              aesthetic.`}
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger defaultOpen={true}>
                Is it animated?
              </AccordionTrigger>
              <AccordionContent>
                {` Yes. It's animated by default, but you can disable it if you
              prefer.`}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Menu Items */}
      <section>
        <h1 className="text-display-sm text-primary-600">MenuItems:</h1>
        <MenuDropdown
          className=""
          trigger={
            <ListItem
              as="button"
              title="Products"
              icon={<RiAddLine size={20} />}
              className="w-fit bg-primary-100 hover:bg-primary-200 rounded-full border border-primary-400"
            />
          }
        >
          <Link
            to="https://www.youtube.com/watch?v=dQw4w9WgXcQ&pp=ygULcmljayBuIHJvbGw%3D"
            target="_blank"
          >
            <MenuSubItem label="Inertia" />
          </Link>
          <MenuItem content={<h6>Blaze</h6>}>
            <MenuSubItem label="Flames" onClick={() => alert("clicked")} />
            <MenuSubItem label="Blaze" onClick={() => alert("click")} />
            <MenuSubItem label="Admin" onClick={() => alert("click")} />
          </MenuItem>
          <Link
            to="https://www.youtube.com/watch?v=dQw4w9WgXcQ&pp=ygULcmljayBuIHJvbGw%3D"
            target="_blank"
          >
            <MenuSubItem label="Qiwi" />
          </Link>
          <Link
            to="https://www.youtube.com/watch?v=dQw4w9WgXcQ&pp=ygULcmljayBuIHJvbGw%3D"
            target="_blank"
          >
            <MenuSubItem label="Audit" />
          </Link>
        </MenuDropdown>
      </section>

      {/* Global Navigation */}
      <section className="my-5">
        <h1 className="text-display-sm text-primary-600">Global Navigation:</h1>
        <div className="flex items-center w-full justify-evenly">
          <GlobalNavigation
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            postion="bottom-left"
            trigger={<Avatar type="text" border rounded text="John Doe" />}
            className="max-w-[270px] p-4 flex flex-col gap-4 justify-center items-center"
          >
            <GlobalNavigationComponent />
          </GlobalNavigation>
          <GlobalNavigation
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            postion="top-left"
            trigger={<Avatar type="text" border rounded text="John Doe" />}
            className="max-w-[270px] p-4 flex flex-col gap-4 justify-center items-center"
          >
            <GlobalNavigationComponent />
          </GlobalNavigation>
          <GlobalNavigation
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            postion="bottom-right"
            trigger={<Avatar type="text" border rounded text="John Doe" />}
            className="max-w-[270px] p-4 flex flex-col gap-4 justify-center items-center"
          >
            <GlobalNavigationComponent />
          </GlobalNavigation>
          <GlobalNavigation
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            postion="top-right"
            trigger={<Avatar type="text" border rounded text="John Doe" />}
            className="max-w-[270px] p-4 flex flex-col gap-4 justify-center items-center"
          >
            <GlobalNavigationComponent />
          </GlobalNavigation>
        </div>
      </section>

      {/* Dropdown  */}
      <section className="flex gap-6 items-center">
        <h1 className="text-lg">Dropdown with icon</h1>
        <Dropdown
          options={multiOptions}
          selected={dropdownMenuOption}
          setSelected={setDropdownMenuOption}
          search={true}
          multiple={true}
          width="200px"
          id="dropdownMenuOptionOne"
          dropdownFooter={true}
          onApply={() => {
            alert("Apply button clicked");
          }}
        />
        <DropdownWithIcon
          options={multiOptions}
          selected={dropdownMenuOptionTwo}
          setSelected={setDropdownMenuOptionTwo}
          search={true}
          multiple={true}
          width="200px"
          id="dropdownMenuOptionTwo"
          trigger={
            <RiFilterLine
              className="hover:bg-gray-200 rounded"
              cursor="pointer"
              size={14}
            />
          }
          dropdownFooter={true}
          onApply={() => {
            alert("Apply button clicked");
          }}
        />
      </section>
      <section className="flex gap-10 my-5">
        <div>
          <h1>Dropdown with icon</h1>
          <DropdownWithIcon
            options={multiOptions}
            selected={multiSelect}
            setSelected={setMultiSelect}
            search={true}
            multiple={true}
            width="100px"
            trigger={
              <RiFilterLine
                className="hover:bg-gray-200 rounded"
                cursor="pointer"
                size={14}
              />
            }
          />
        </div>
        <div>
          <h1>Dropdown with icon</h1>
          <DropdownWithIcon
            options={multiOptions}
            selected={multiSelect}
            setSelected={setMultiSelect}
            search={true}
            multiple={true}
            width="100px"
            trigger={<span>dropdown</span>}
          />
        </div>
        <div>
          <h1 className="text-lg">Multiple Dropdown</h1>
          <Dropdown
            options={multiOptions}
            selected={multiSelect}
            setSelected={setMultiSelect}
            width="300px"
            icon={<RiGlobalLine size={16} />}
            dropDownTooltip={true}
            dropdownFooter={true}
            position="bottom"
            onApply={() => {
              alert("Apply button clicked");
            }}
          />
        </div>
        <div>
          <h1 className="text-lg">Single Dropdown Language</h1>
          <Dropdown
            options={multiOptions}
            selected={singleSelect}
            setSelected={setSingleSelect}
            width="200px"
            // search={true}
            multiple={false}
            info="info"
            // dropDownTooltip={true}
          />
        </div>
        <div>
          <h1 className="text-lg">Disabled Dropdown</h1>
          <Dropdown
            options={singleOptions}
            selected={singleSelect}
            setSelected={setSingleSelect}
            width="200px"
            multiple={false}
            info="info"
            disabled={true}
          />
        </div>
        <div className="ml-10">
          <DropdownWithIcon
            options={multiOptions}
            selected={multiSelect}
            setSelected={setMultiSelect}
            search={true}
            multiple={true}
            width="100px"
            position="right"
            trigger={
              <RiFilterLine
                className="hover:bg-gray-200 rounded"
                cursor="pointer"
                size={14}
              />
            }
          />
        </div>
      </section>

      {/* Tabs */}
      <div>
        <h1 className="text-display-sm text-primary-600">Tabs</h1>
        <section className="my-5">
          <h1 className="text-lg">Default Tabs</h1>
          <TabsContainer value={value}>
            <TabList
              onChange={handleTabChange}
              ariaLabel="lab API tabs example"
              box={false}
            >
              <Tab
                label="Item One"
                content="(12)"
                icon={<RiSearch2Line size={16} />}
                value="1"
                onChange={handleTabChange}
                selectedTabValue={value}
              />
              <Tab
                label="Item Two"
                value="2"
                onChange={handleTabChange}
                selectedTabValue={value}
              />
              <Tab
                label="Item Three"
                value="3"
                onChange={handleTabChange}
                selectedTabValue={value}
              />
            </TabList>
            <TabPanel value="1" currentValue={value}>
              Item One Content
            </TabPanel>
            <TabPanel value="2" currentValue={value}>
              Item Two Content
            </TabPanel>
            <TabPanel value="3" currentValue={value}>
              Item Three Content
            </TabPanel>
          </TabsContainer>
        </section>
        <section className="my-5">
          <h1 className="text-lg">Tab with box variant</h1>
          <TabsContainer value={value}>
            <TabList
              onChange={handleTabChange}
              ariaLabel="lab API tabs example"
              box={true}
            >
              <Tab
                label="Item One"
                value="1"
                content="(12)"
                icon={<RiSearch2Line size={16} />}
                onChange={handleTabChange}
                selectedTabValue={value}
              />
              <Tab
                label="Item Two"
                value="2"
                onChange={handleTabChange}
                selectedTabValue={value}
              />
              <Tab
                label="Item Three"
                value="3"
                onChange={handleTabChange}
                selectedTabValue={value}
              />
            </TabList>
            <TabPanel value="1" currentValue={value}>
              Item One Content
            </TabPanel>
            <TabPanel value="2" currentValue={value}>
              Item Two Content
            </TabPanel>
            <TabPanel value="3" currentValue={value}>
              Item Three Content
            </TabPanel>
          </TabsContainer>
        </section>
        <section className="my-5">
          <h1 className="text-lg">Custom styling for Tabs:</h1>
          <TabsContainer value={value}>
            <TabList
              onChange={handleTabChange}
              ariaLabel="lab API tabs example"
              className="border-none"
            >
              <Tab
                label="Item One"
                value="1"
                // icon={<RiSearch2Line size={16} />}
                onChange={handleTabChange}
                selectedTabValue={value}
                className="bg-primary-600 text-white rounded-2xl hover:bg-primary-100 hover:text-black border-b-0 hover:rounded-2xl"
              />
              <Tab
                label="Item Two"
                value="2"
                onChange={handleTabChange}
                selectedTabValue={value}
              />
              <Tab
                label="Item Three"
                value="3"
                onChange={handleTabChange}
                selectedTabValue={value}
              />
            </TabList>
            <TabPanel value="1" currentValue={value}>
              Item One Content
            </TabPanel>
            <TabPanel value="2" currentValue={value}>
              Item Two Content
            </TabPanel>
            <TabPanel value="3" currentValue={value}>
              Item Three Content
            </TabPanel>
          </TabsContainer>
        </section>
      </div>

      {/* Modal */}
      <section className="my-5">
        <Button onClick={() => setShowModal(true)}>Show Modal</Button>
        <Modal
          showModal={showModal}
          setShowModal={setShowModal}
          closeModal={true}
          closeOnOutsideClick={true}
          className="sm:w-[50%] w-full h-[50%]"
        >
          <div>content</div>
        </Modal>
      </section>

      {/* notice */}
      <section className="flex flex-col w-fit">
        <h1 className="text-display-sm text-primary-600">Notice:</h1>
        <Button variant="filled" onClick={() => setOpen(true)}>
          Show Notice
        </Button>
        <Notice
          open={open}
          setOpen={setOpen}
          variant="warning"
          noticeTitle="Notice Header"
          position="bottom"
        >
          This is a success Alert with an encouraging title and both icons.
          <section className="flex gap-2 items-center mt-3">
            <Button variant="outlined" intent="error-outlined">
              Cancel
            </Button>
            <Button>Apply</Button>
          </section>
        </Notice>
        <Notice
          open={open}
          setOpen={setOpen}
          variant="success"
          noticeTitle="Notice Header"
          position="top"
        >
          This is a success Alert with an encouraging title and both icons.
        </Notice>
      </section>

      {/* File Upload */}
      <section className="flex flex-col gap-2 max-w-lg">
        <h1 className="text-display-sm text-primary-600">File Upload</h1>
        <FileUpload
          id="single"
          selectedFile={selectedSingleFiles}
          setSelectedFile={setSelectedSingleFiles}
          onChange={handleFileChangeSingle}
          onDelete={() => handleDeleteFileSingle(selectedSingleFiles[0])}
          title="SVG, PNG, JPG or GIF (max. 800x400px)"
        >
          <ProgressBar progressColor="bg-primary-600" progress={50} />
        </FileUpload>
        <FileUpload
          multiple
          id="multiple"
          selectedFile={selectedFiles}
          setSelectedFile={setSelectedFiles}
          onChange={handleFileChangeMultiple}
          onDelete={() => handleDeleteFile(selectedFiles[0])}
          title="SVG, PNG, JPG or GIF (max. 800x400px)"
          filePreviewClassName="grid grid-cols-2 gap-2"
        >
          <ProgressBar progressColor="bg-primary-600" progress={50} />
        </FileUpload>
      </section>

      {/* Tooltip */}
      <section className="flex items-center gap-5 my-5">
        <h1 className="text-display-sm text-primary-600">Tooltip:</h1>
        <Tooltip
          position="top"
          className="text-red-500"
          content="Tooltips are used to describe or identify an element. In most scenarios, tooltips help the user understand the meaning, function or alt-text of an element."
        >
          Top
        </Tooltip>
        <Tooltip
          position="right"
          content=" Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Laborum incidunt perferendis
                sapiente eos? Error aut accusamus odio officiis eaque
                consectetur obcaecati doloribus, inventore ut reiciendis maiores
                facere veritatis, corrupti autem illo deleniti eveniet
                repudiandae iste harum. Voluptate minima ab tenetur veritatis
                neque dolorem voluptates, praesentium a, velit doloremque
                impedit facilis vel exercitationem assumenda. Esse labore
                mollitia enim beatae officia? Delectus exercitationem voluptatem
                consectetur quae veniam odit ut explicabo voluptas. Doloremque
                nesciunt deleniti aliquam quibusdam nulla ipsa repudiandae
                aspernatur placeat fuga officia. Natus itaque inventore eligendi
                eveniet, nemo saepe voluptatum et ducimus provident suscipit
                dolore, incidunt esse est iusto consequatur reprehenderit."
        >
          Right
        </Tooltip>
        <Tooltip
          position="right"
          content={
            <div>
              <h1 className="font-semibold text-xs">This is a tooltip</h1>
              <p className="font-normal text-xs">
                Tooltips are used to describe or identify an element. In most
                scenarios, tooltips help the user understand the meaning,
                function or alt-text of an element.
              </p>
            </div>
          }
        >
          <RiInformation2Line size={15} />
        </Tooltip>
        <Tooltip
          position="bottom"
          content="Tooltips are used to describe or identify an element. In most scenarios"
        >
          Bottom
        </Tooltip>
        <Tooltip position="left" content="Tooltips are used">
          Left
        </Tooltip>
      </section>

      {/* skeleton */}
      <section className="my-5">
        <h1 className="text-display-sm text-primary-600">Skeleton:</h1>
        <div className="flex flex-col gap-2">
          {/* in percent */}
          <div className="w-[400px] h-[200px]">
            <Skeleton width="100%" height="100%" />
          </div>
          <Skeleton width="80px" height="80px" circle />
          <Skeleton width="167px" height="14px" />
          <Skeleton width="138px" height="42px" />
        </div>
      </section>

      {/* stepper */}
      <section>
        <h1 className="text-display-sm text-primary-600">Stepper:</h1>
        <div className="w-[50%] mx-auto">
          <Stepper
            stepsConfig={stepsConfig}
            currentStep={currentStep}
            setCurrentStep={setCurrentStep}
            isComplete={isComplete}
            setIsComplete={setIsComplete}
            // position="vertical"
            position="horizontal"
          />
          <section className="my-5 flex justify-end items-center gap-4">
            <Button
              variant="outlined"
              onClick={handlePrev}
              disabled={currentStep === 1}
            >
              Prev
            </Button>
            <Button variant="filled" onClick={handleNext}>
              {currentStep === stepsConfig.length ? "Finish" : "Next"}
            </Button>
          </section>
        </div>
        <div className="w-[50%] mx-auto">
          <Stepper
            stepsConfig={stepsConfig}
            currentStep={currentStep}
            setCurrentStep={setCurrentStep}
            isComplete={isComplete}
            setIsComplete={setIsComplete}
            position="vertical"
          />
          <section className="my-5 flex justify-end items-center gap-4">
            <Button
              variant="outlined"
              onClick={handlePrev}
              disabled={currentStep === 1}
            >
              Prev
            </Button>
            <Button variant="filled" onClick={handleNext}>
              {currentStep === stepsConfig.length ? "Finish" : "Next"}
            </Button>
          </section>
        </div>
      </section>

      {/* single Date picker */}
      <section className="space-y-5 my-20">
        <h1 className="text-display-sm text-primary-600">Single Date Picker</h1>
        <div className="flex items-start gap-20">
          <div className="space-y-2">
            <h1>Date Picker with Top Position</h1>
            <DatePicker
              selected={selectedDate}
              setSelected={setSelectedDate}
              position="top-left"
              dateFormat="MMM dd, yyyy"
            />
          </div>
          <div className="space-y-2">
            <h1>Date Picker with Bottom Position</h1>
            <DatePicker
              selected={selectedDate}
              setSelected={setSelectedDate}
              position="bottom-left"
            />
          </div>
        </div>
        <div className="flex items-start gap-20">
          <div className="space-y-2">
            <h1>Date Picker with disabled before today</h1>
            <DatePicker
              selected={selectedDate}
              setSelected={setSelectedDate}
              disabledCalendar={{ before: new Date() }}
              position="top-right"
            />
          </div>
          <div className="space-y-2">
            <h1>Date Picker with disabled after today</h1>
            <DatePicker
              selected={selectedDate}
              setSelected={setSelectedDate}
              disabledCalendar={{ after: new Date() }}
              position="bottom-right"
            />
          </div>
        </div>
        <p> Selected Date: {selectedDate?.toString()}</p>
      </section>

      {/* Date Range Picker */}
      <section className="space-y-5 my-10">
        <h1 className="text-display-sm text-primary-600">Date Range Picker</h1>
        <div className="flex items-start gap-20">
          <div className="space-y-2">
            <h1>Date Range with presets</h1>
            <DateRangePicker
              selectedRange={selectedRange}
              setSelectedRange={setSelectedRange}
              handleRangeSelect={handleRangeSelect}
              position="bottom-left"
            >
              <section className="flex flex-col gap-y-4 text-left justify-start items-start mt-5">
                <button
                  className="border-none px-3 py-1 hover:bg-gray-200 rounded-xl font-semibold text-text-xs text-gray-700"
                  onClick={() => applyPreset("today")}
                >
                  Today
                </button>
                <button
                  className="border-none px-3 py-1 hover:bg-gray-200 rounded-xl font-semibold text-text-xs text-gray-700"
                  onClick={() => applyPreset("last1Months")}
                >
                  Last 1 Months
                </button>
                <button
                  className="border-none px-3 py-1 hover:bg-gray-200 rounded-xl font-semibold text-text-xs text-gray-700"
                  onClick={() => applyPreset("last3Months")}
                >
                  Last 3 Months
                </button>
                <button
                  className="border-none px-3 py-1 hover:bg-gray-200 rounded-xl font-semibold text-text-xs text-gray-700"
                  onClick={() => applyPreset("last6Months")}
                >
                  Last 6 Months
                </button>
              </section>
            </DateRangePicker>
          </div>
          <div className="space-y-2">
            <h1>Date Range with without presets</h1>
            <DateRangePicker
              selectedRange={selectedRange}
              setSelectedRange={setSelectedRange}
              handleRangeSelect={handleRangeSelect}
              position="bottom-right"
            />
          </div>
        </div>
        <div className="flex items-start gap-20">
          <div className="space-y-2">
            <h1>Date Range with disabled before today</h1>
            <DateRangePicker
              selectedRange={selectedRange}
              setSelectedRange={setSelectedRange}
              handleRangeSelect={handleRangeSelect}
              disabledCalendar={{ before: new Date() }}
            />
          </div>
          <div className="space-y-2">
            <h1>Date Range with disabled after today</h1>
            <DateRangePicker
              selectedRange={selectedRange}
              setSelectedRange={setSelectedRange}
              handleRangeSelect={handleRangeSelect}
              disabledCalendar={{ after: new Date() }}
            />
          </div>
        </div>
        <div className="flex items-start gap-20">
          <div className="space-y-2">
            <h1>Date Range with top left position</h1>
            <DateRangePicker
              selectedRange={selectedRange}
              setSelectedRange={setSelectedRange}
              handleRangeSelect={handleRangeSelect}
              position="top-left"
            />
          </div>
          <div className="space-y-2">
            <h1>Date Range with top right position</h1>
            <DateRangePicker
              selectedRange={selectedRange}
              setSelectedRange={setSelectedRange}
              handleRangeSelect={handleRangeSelect}
              position="top-right"
            />
          </div>
          <div className="space-y-2">
            <h1>Date Range with bottom left position</h1>
            <DateRangePicker
              selectedRange={selectedRange}
              setSelectedRange={setSelectedRange}
              handleRangeSelect={handleRangeSelect}
              position="bottom-left"
            />
          </div>
          <div className="space-y-2">
            <h1>Date Range with bottom right position</h1>
            <DateRangePicker
              selectedRange={selectedRange}
              setSelectedRange={setSelectedRange}
              handleRangeSelect={handleRangeSelect}
              position="bottom-right"
            />
          </div>
        </div>
        <p>Selected Range: {selectedRange?.from + " - " + selectedRange?.to}</p>
      </section>

      {/* Textarea */}
      <section className="flex flex-col gap-1">
        <h1 className="text-display-sm text-primary-600">Textarea</h1>
        <section className="flex items-center gap-4">
          <h1>States</h1>
          <Textarea
            placeholder="This is a placeholder"
            rows={4}
            size="lg"
          ></Textarea>
          <Textarea
            placeholder="This is a placeholder"
            size="sm"
            disabled
          ></Textarea>
        </section>
      </section>

      {/* Circular Progress */}
      <section className="my-5">
        <h1 className="text-display-sm text-primary-600">Circular Progress:</h1>
        <div className="flex items-center gap-5 py-10">
          <CircularProgress size={50} strokeWidth={4} percentage={50} />
          <CircularProgress size={90} strokeWidth={10} percentage={70} />
          <CircularProgress
            size={120}
            strokeWidth={8}
            percentage={60}
            text="60%"
            textClassName="text-success-600 font-semibold"
          />
        </div>
      </section>

      {/* Loading State */}
      <section className="flex flex-col items-center justify-center gap-2">
        <h1 className="text-display-sm text-primary-600">Loading</h1>
        <Loading width="50px" height="50px" loaderColor="green" />
        <span className="font-bold">Hold On ...</span>
        <p className="text-sm text-gray-500">
          We are running into some issues :&#40;
        </p>
        <Button>
          Loading <Loading width="15px" height="15px" variant="light" />
        </Button>
        <Button variant="outlined">
          Loading <Loading width="15px" height="15px" variant="heavy" />
        </Button>
      </section>

      {/* Sidebar */}
      <div className="relative flex gap-3 bg-white">
        <section className=" bg-white">
          <Sidebar collapsed={collapsed} setCollapsed={setCollapsed}>
            <Sidebar.Header collapsed={collapsed} setCollapsed={setCollapsed}>
              <span onClick={() => setCollapsed((prev) => !prev)}>Logo</span>
            </Sidebar.Header>
            <Sidebar.Menu
              scroll
              collapsed={collapsed}
              setCollapsed={setCollapsed}
              navItems={navItems}
            />
            <Sidebar.Footer
              collapsed={collapsed}
              setCollapsed={setCollapsed}
              navItems={footerItems}
            >
              <Divider className="mb-3" />
              <Button
                className="w-full"
                variant="outlined"
                intent="default-outlined"
                startIcon={<RiLogoutBoxRLine size={20} />}
              >
                {!collapsed ? "" : "Logout"}
              </Button>
            </Sidebar.Footer>
          </Sidebar>
        </section>
        <section className="flex-grow ml-[80px] transition-all duration-300 ease-in-out">
          <h1>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Repellendus, fugiat.
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur nesciunt adipisci modi culpa voluptas accusamus
            corporis.
          </p>
        </section>
      </div>

      {/* Breadcrumbs */}
      <section className="my-5">
        <h1 className="text-display-sm text-primary-600">Breadcrumbs</h1>
        <Breadcrumbs aria-label="breadcrumb" separator="/">
          <Link to="/">
            <RiStackLine size={18} />
          </Link>
          <Link
            to="/pages/dashboard"
            // style={{ textDecoration: "none", color: "inherit" }}
          >
            Dashboard
          </Link>
          <Link
            to="/pages/team"
            // className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full"
          >
            Team
          </Link>
        </Breadcrumbs>
      </section>
    </div>
  );
};

export default Test;
