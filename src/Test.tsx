import Button from "./components/Button";
import {
  RiAlertFill,
  RiCircleFill,
  RiFilterLine,
  RiGlobalLine,
  RiInformation2Line,
  RiListCheck,
  RiLogoutBoxRLine,
  RiMailLine,
  RiSearch2Line,
  RiStackLine,
} from "@remixicon/react";
import Chip from "./components/Chip";
import Divider from "./components/Divider";
import Toggle from "./components/Toggle";
import Label from "./components/Label";
import { Checkbox, DatePicker } from "./components";
import HelperText from "./components/HelperText";
import Radio from "./components/Radio";
import Input from "./components/Input";
import { cn } from "./utils";
import { ChangeEvent, useCallback, useEffect, useState } from "react";
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
import { Link } from "react-router-dom";
import DateRangePicker from "./components/DateRangePicker";
import { DateRange } from "react-day-picker";
import {
  format,
  isAfter,
  isValid,
  parse,
  startOfToday,
  subMonths,
} from "date-fns";

interface Option {
  label: string;
  value: string;
}

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
  // console.log("multiSelect", multiSelect)

  const [singleSelect, setSingleSelect] = useState<Option[]>([]);
  // console.log("singleSelect", singleSelect);

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
    },
    { label: "banana", value: "banana", addInfo: "jdhjaldh" },
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

  // tabs
  const [value, setValue] = useState("1");

  const handleTabChange = (newValue: string) => {
    setValue(newValue);
  };

  // modal
  const [showModal, setShowModal] = useState(false);

  // notice
  const [open, setOpen] = useState(false);

  const [loadingState, setLoadingState] = useState(false);
  console.log("loadingState", loadingState)
  // progress bar
  const [progress, setProgress] = useState(0);

  // single file upload
  const [selectedSingleFiles, setSelectedSingleFiles] = useState<File[]>([]);

  // sidebar
  const [collapsed, setCollapsed] = useState(true);

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
    setTimeout(() => {
      setLoadingState(true);
    }, 2000);
  });

  useEffect(() => {
    const timer = setTimeout(() => setProgress(80), 2000);
    return () => clearTimeout(timer);
  }, [progress]);

  // single date picker
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [inputValueDate, setInputValueDate] = useState<string>("");

  // date range picker
  const [selectedRange, setSelectedRange] = useState<DateRange | undefined>();
  const [dateRangeInput, setDateRangeInput] = useState<string>("");

  const handleRangeInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      setDateRangeInput(value);
      const [fromDateString, toDateString] = value.split(" - ");
      const fromDate = parse(fromDateString, "dd/MM/yyyy", new Date());
      const toDate = parse(toDateString, "dd/MM/yyyy", new Date());

      if (isValid(fromDate) && isValid(toDate) && isAfter(toDate, fromDate)) {
        setSelectedRange({ from: fromDate, to: toDate });
      } else {
        setSelectedRange(undefined);
      }
    },
    [] // Removed unnecessary dependencies
  );

  const handleRangeSelect = useCallback((range: DateRange | undefined) => {
    setSelectedRange(range);
    if (range) {
      setDateRangeInput(
        `${range.from ? format(range.from, "dd/MM/yyyy") : ""} - ${
          range.to ? format(range.to, "dd/MM/yyyy") : ""
        }`
      );
    } else {
      setDateRangeInput("");
    }
  }, []);

  const handleApply = useCallback(() => {
    const { from, to } = selectedRange || {};
    const fromDate = from ? format(from, "dd/MM/yyyy") : "";
    const toDate = to ? format(to, "dd/MM/yyyy") : "";

    if (selectedRange) {
      setDateRangeInput(`${fromDate} - ${toDate}`); // Ensure input value is set
      alert(`Date Range:  ${[fromDate, toDate]}`);
    } else {
      console.log("No Date Range selected.");
    }
  }, []);
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
    setDateRangeInput(
      `${format(fromDate, "MMM dd, y")} - ${format(toDate, "MMM dd, y")}`
    );
  };

  return (
    <div className="m-4">
      <div className="mt-10 flex gap-10">
        <section>
          <h1 className="text-primary-400 border-b border-primary-900 w-fit">
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
          <h1 className="text-primary-400 border-b border-primary-900 w-fit">
            Typography - Font Weight
          </h1>
          <h1 className="font-regular">Regular</h1>
          <h1 className="font-medium">Medium</h1>
          <h1 className="font-semibold">Semi Bold</h1>
          <h1 className="font-bold">Bold</h1>
        </section>
      </div>
      <div className="flex flex-col gap-5">
        <h1 className="text-display-sm text-primary-400">Button:</h1>
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
        <h1 className="text-display-sm text-primary-400">Chip:</h1>
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
        <h1 className="text-display-sm text-primary-400">Divider</h1>
        <div className="w-[50%] border border-primary-600 p-5 flex justify-center gap-6 items-center">
          <Divider
            position="vertical"
            height="200px"
            className="my-4 border-red-600"
          />
          <Divider position="horizontal" className="my-4" />
        </div>
      </section>

      {/* Chips  */}
      <div className="space-y-5">
        <h1 className="text-display-sm text-primary-400">Chip:</h1>
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

      {/* Toggle  */}
      <div className="flex flex-col gap-5 my-5">
        <h1 className="text-display-sm text-primary-400">Toggle:</h1>
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
        <h1 className="text-display-sm text-primary-400">Checkbox:</h1>
        <section className="flex items-center gap-4">
          <h1>Size with Text:</h1>
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
        <h1 className="text-display-sm text-primary-400">Radio:</h1>
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
        <h1 className="text-display-sm text-primary-400">Input Field:</h1>
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

      {/* Dropdown  */}
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
        <h1 className="text-display-sm text-primary-400">Tabs</h1>
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
        >
          <div className="w-[500px] h-[300px]">content</div>
        </Modal>
      </section>

      {/* notice */}
      <section className="flex flex-col w-fit">
        <h1 className="text-display-sm text-primary-400">Notice:</h1>
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
        <h1 className="text-display-sm text-primary-400">File Upload</h1>
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
        >
          <ProgressBar progressColor="bg-primary-600" progress={50} />
        </FileUpload>
      </section>

      {/* Tooltip */}
      <section className="flex items-center gap-5 my-5">
        <h1 className="text-display-sm text-primary-400">Tooltip:</h1>
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
        <h1 className="text-display-sm text-primary-400">Skeleton:</h1>
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
        <h1 className="text-display-sm text-primary-400">Stepper:</h1>
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
        <h1 className="text-display-sm text-primary-400">Single Date Picker</h1>
        <div className="flex items-start gap-20">
          <div className="space-y-2">
            <h1>Date Picker with Top Position</h1>
            <DatePicker
              selected={selectedDate}
              setSelected={setSelectedDate}
              inputValue={inputValueDate}
              position="top"
              setInputValue={setInputValueDate}
            />
          </div>
          <div className="space-y-2">
            <h1>Date Picker with Bottom Position</h1>
            <DatePicker
              selected={selectedDate}
              setSelected={setSelectedDate}
              inputValue={inputValueDate}
              position="bottom"
              setInputValue={setInputValueDate}
            />
          </div>
        </div>
        <div className="flex items-start gap-20">
          <div className="space-y-2">
            <h1>Date Picker with disabled before today</h1>
            <DatePicker
              selected={selectedDate}
              setSelected={setSelectedDate}
              inputValue={inputValueDate}
              disabledCalendar={{ before: new Date() }}
              setInputValue={setInputValueDate}
            />
          </div>
          <div className="space-y-2">
            <h1>Date Picker with disabled after today</h1>
            <DatePicker
              selected={selectedDate}
              setSelected={setSelectedDate}
              inputValue={inputValueDate}
              disabledCalendar={{ after: new Date() }}
              setInputValue={setInputValueDate}
            />
          </div>
        </div>
        <p> Selected Date: {selectedDate?.toString()}</p>
      </section>

      <section className="space-y-5 my-10">
        <h1 className="text-display-sm text-primary-400">Date Range Picker</h1>
        <div className="flex items-start gap-20">
          <div className="space-y-2">
            <h1>Date Range with presets</h1>
            <DateRangePicker
              selectedRange={selectedRange}
              setSelectedRange={setSelectedRange}
              dateRangeInput={dateRangeInput}
              setDateRangeInput={setDateRangeInput}
              handleInputChange={handleRangeInputChange}
              handleRangeSelect={handleRangeSelect}
              handleApply={handleApply}
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
              dateRangeInput={dateRangeInput}
              setDateRangeInput={setDateRangeInput}
              handleInputChange={handleRangeInputChange}
              handleRangeSelect={handleRangeSelect}
              handleApply={handleApply}
            />
          </div>
        </div>
        <div className="flex items-start gap-20">
          <div className="space-y-2">
            <h1>Date Range with disabled before today</h1>
            <DateRangePicker
              selectedRange={selectedRange}
              setSelectedRange={setSelectedRange}
              dateRangeInput={dateRangeInput}
              setDateRangeInput={setDateRangeInput}
              handleInputChange={handleRangeInputChange}
              handleRangeSelect={handleRangeSelect}
              handleApply={handleApply}
              disabledCalendar={{ before: new Date() }}
            />
          </div>
          <div className="space-y-2">
            <h1>Date Range with disabled after today</h1>
            <DateRangePicker
              selectedRange={selectedRange}
              setSelectedRange={setSelectedRange}
              dateRangeInput={dateRangeInput}
              setDateRangeInput={setDateRangeInput}
              handleInputChange={handleRangeInputChange}
              handleRangeSelect={handleRangeSelect}
              handleApply={handleApply}
              disabledCalendar={{ after: new Date() }}
            />
          </div>
        </div>
        <div className="flex items-start gap-20">
          <div className="space-y-2">
            <h1>Date Range with top position</h1>
            <DateRangePicker
              selectedRange={selectedRange}
              setSelectedRange={setSelectedRange}
              dateRangeInput={dateRangeInput}
              setDateRangeInput={setDateRangeInput}
              handleInputChange={handleRangeInputChange}
              handleRangeSelect={handleRangeSelect}
              handleApply={handleApply}
              position="top"
            />
          </div>
          <div className="space-y-2">
            <h1>Date Range with bottom position</h1>
            <DateRangePicker
              selectedRange={selectedRange}
              setSelectedRange={setSelectedRange}
              dateRangeInput={dateRangeInput}
              setDateRangeInput={setDateRangeInput}
              handleInputChange={handleRangeInputChange}
              handleRangeSelect={handleRangeSelect}
              handleApply={handleApply}
              position="bottom"
            />
          </div>
        </div>

        <p>Selected Range: {selectedRange?.from + " - " + selectedRange?.to}</p>
      </section>

      {/* Textarea */}
      <section className="flex flex-col gap-1">
        <h1 className="text-display-sm text-primary-400">Textarea</h1>
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

      {/* Loading State */}
      <section className="flex flex-col items-center justify-center gap-2">
        <h1 className="text-display-sm text-primary-400">Loading</h1>
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
        <h1 className="text-display-sm text-primary-400">Breadcrumbs</h1>
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
