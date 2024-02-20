import React from "react";
import {
  Card,
  List,
  ListItem,
  ListItemPrefix,
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import {
  PresentationChartBarIcon,
  UserCircleIcon,
} from "@heroicons/react/24/solid";
import { ChevronRightIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

export function SideBar() {
  const [open, setOpen] = React.useState(0);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <Card className="bg-white h-[calc(100vh-2rem)] w-full max-w-[15rem] p-2 shadow-md shadow-blue-gray-900/5 border-r-2 border-gray-200">
      <List>
        <Accordion
          open={open === 1}
          icon={
            <ChevronDownIcon
              strokeWidth={2.5}
              className={`mx-auto h-4 w-4 transition-transform ${
                open === 1 ? "rotate-180" : ""
              }`}
            />
          }
        >
          <ListItem className=" hover:bg-cyan-50 py-2 font-semibold">
            <ListItemPrefix>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-5 w-5 ml-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                />
              </svg>
            </ListItemPrefix>
            Dashboard
          </ListItem>
          <ListItem className="hover:bg-cyan-50 py-1" selected={open === 1}>
            <AccordionHeader
              onClick={() => handleOpen(1)}
              className="border-b-0 p-2 flex items-center justify-start gap-2"
            >
              <div>
                <PresentationChartBarIcon className="h-5 w-5" />
              </div>
              <Link className="no-underline text-black">Dashboard</Link>
            </AccordionHeader>
          </ListItem>
          <AccordionBody className="py-1">
            <List className="p-0">
              <ListItem className="hover:text-cyan-500 py-2 font-semibold">
                <ListItemPrefix>
                  <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                </ListItemPrefix>
                Analytics
              </ListItem>
              <ListItem className="hover:text-cyan-500 py-2 font-semibold">
                <ListItemPrefix>
                  <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                </ListItemPrefix>
                Reporting
              </ListItem>
              <ListItem className="hover:text-cyan-500 py-2 font-semibold">
                <ListItemPrefix>
                  <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                </ListItemPrefix>
                Projects
              </ListItem>
            </List>
          </AccordionBody>
        </Accordion>
        <Accordion
          open={open === 2}
          icon={
            <ChevronDownIcon
              strokeWidth={2.5}
              className={`mx-auto h-4 w-4 transition-transform ${
                open === 2 ? "rotate-180" : ""
              }`}
            />
          }
        >
          <ListItem className="hover:bg-cyan-50 py-1 " selected={open === 2}>
            <AccordionHeader
              onClick={() => handleOpen(2)}
              className="border-b-0 p-2 flex items-center justify-start gap-3"
            >
              <div>
                <PresentationChartBarIcon className="h-5 w-5" />
              </div>
              <Link className="no-underline text-black">About</Link>
            </AccordionHeader>
          </ListItem>
          <AccordionBody className="py-1">
            <List className="p-0">
              <ListItem className="hover:text-cyan-500 py-2 font-semibold">
                <ListItemPrefix>
                  <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                </ListItemPrefix>
                Analytics
              </ListItem>
              <ListItem className="hover:text-cyan-500 py-2 font-semibold">
                <ListItemPrefix>
                  <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                </ListItemPrefix>
                Reporting
              </ListItem>
              <ListItem className="hover:text-cyan-500 py-2 font-semibold">
                <ListItemPrefix>
                  <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                </ListItemPrefix>
                Projects
              </ListItem>
            </List>
          </AccordionBody>
        </Accordion>

        <ListItem className=" hover:bg-cyan-50 py-2 font-semibold">
          <ListItemPrefix>
            <UserCircleIcon className="h-5 w-5 ml-2 " />
          </ListItemPrefix>
          Settings
        </ListItem>
        <ListItem className=" hover:bg-cyan-50 py-2 font-semibold">
          <ListItemPrefix>
            <UserCircleIcon className="h-5 w-5 ml-2" />
          </ListItemPrefix>
          Settings
        </ListItem>
        <ListItem className=" hover:bg-cyan-50 py-2 font-semibold">
          <ListItemPrefix>
            <UserCircleIcon className="h-5 w-5 ml-2" />
          </ListItemPrefix>
          Settings
        </ListItem>
      </List>
    </Card>
  );
}

export default SideBar;
