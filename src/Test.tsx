import Button from "./components/Button";
import { RiAlertFill, RiListCheck } from "@remixicon/react";
import Chip from "./components/Chip";
import Divider from "./components/Divider";

const Test = () => {
  return (
    <div>
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
    </div>
  );
};

export default Test;
