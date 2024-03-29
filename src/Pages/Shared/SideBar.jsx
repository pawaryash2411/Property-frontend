import { useState } from "react";
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
import {
  ChevronRightIcon,
  ChevronDownIcon,
  ChevronLeftIcon,
  // XIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

export function SideBar() {
  const [open, setOpen] = useState(0);
  const [openBar, setOpenBar] = useState(true);

  const handleToggleSidebar = () => {
    setOpenBar(!openBar);
  };

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <>
      <Card
        className={`bg-white h-[calc(100vh-2rem)] w-full p-2 shadow-md shadow-blue-gray-900/5 border-r-2 border-gray-200 ease-in-out duration-150 transition-max-w ${openBar ? "max-w-[15rem] " : "max-w-[2rem]"
          }`}
      >
        <button onClick={handleToggleSidebar}>
          {openBar ? (
            <ChevronLeftIcon className="h-10 w-10 text-cyan-500 bg-slate-50 rounded-full p-2" />
          ) : (
            <ChevronRightIcon className="h-10 w-10 text-cyan-500 bg-slate-50 rounded-full p-2" />
          )}
        </button>
        <List style={{ display: openBar ? "block" : "none" }}>
          {/* dashboard Section start */}
          <ListItem className=" hover:bg-cyan-50 ms-2 py-2 font-semibold flex gap-2">
            <ListItemPrefix>
              <i class="fa-solid fa-boxes-stacked fs-5" style={{ color: "#74C0FC" }}></i>
            </ListItemPrefix>
            <Link
              className="link-underline link-underline-opacity-0 text-black"
              to={"dashboard"}
            >
              Dashboard
            </Link>
          </ListItem>
          {/* dashboard Section end */}

          {/* Property section start */}
          <Accordion
            open={open === 1}
            icon={
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`mx-auto h-4 w-4 transition-transform ${open === 1 ? "rotate-180" : ""
                  }`}
              />
            }
          >
            <ListItem className="hover:bg-cyan-50 py-1" selected={open === 1}>
              <AccordionHeader
                onClick={() => handleOpen(1)}
                className="border-b-0 p-2 flex items-center justify-start gap-2"
              >
                <div>
                  <i class="fa-solid fa-house-building" style={{ color: "#74C0FC" }}></i>
                </div>
                <Link className="link-underline link-underline-opacity-0 text-dark">
                  {" "}
                  Property{" "}
                </Link>
              </AccordionHeader>
            </ListItem>
            <AccordionBody className="py-1">
              <List className="p-0">
                <ListItem className="hover:text-cyan-500 py-2 font-semibold">
                  <Link to={"Property"} className="link-underline link-underline-opacity-0 text-dark">
                    View All Property
                  </Link>
                </ListItem>
                <ListItem className="hover:text-cyan-500 py-2 font-semibold">
                  <Link to={"addproperty"} className="link-underline link-underline-opacity-0 text-dark"> Add Property{" "} </Link>
                </ListItem>
                {/* <ListItem className="hover:text-cyan-500 py-2 font-semibold">
                  View All Property
                </ListItem> */}
              </List>
            </AccordionBody>
          </Accordion>
          {/* Property section end  */}

          {/* report section start */}
          <Accordion
            open={open === 2}
            icon={
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`mx-auto h-4 w-4 transition-transform ${open === 2 ? "rotate-180" : ""
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
                  <i class="fa-sharp fa-regular fa-file-chart-pie fs-5" style={{ color: "#74C0FC" }}></i>
                  {/* <PresentationChartBarIcon className="h-5 w-5" /> */}
                </div>
                <Link className="link-underline link-underline-opacity-0 text-dark">
                  {" "}
                  Reports{" "}
                </Link>
              </AccordionHeader>
            </ListItem>
            <AccordionBody className="py-1">
              <List className="p-0">
                <ListItem className="hover:text-cyan-500 py-2 font-semibold">
                  <Link
                    to={"rent"}
                    className="link-underline link-underline-opacity-0 text-dark"
                  >
                    {" "}
                    For Rent
                  </Link>
                </ListItem>
                <ListItem className="hover:text-cyan-500 py-2 font-semibold">
                  <Link
                    to={"property"}
                    className="link-underline link-underline-opacity-0 text-dark"
                  >
                    for Property
                  </Link>
                </ListItem>
                <ListItem className="hover:text-cyan-500 py-2 font-semibold">
                  <Link
                    to={"renters"}
                    className="link-underline link-underline-opacity-0 text-dark"
                  >
                    For renter{" "}
                  </Link>
                </ListItem>
                <ListItem className="hover:text-cyan-500 py-2 font-semibold">
                  <Link
                    to={"requset"}
                    className="link-underline link-underline-opacity-0 text-dark"
                  >
                    {" "}
                    Maintenance{" "}
                  </Link>
                </ListItem>
              </List>
            </AccordionBody>
          </Accordion>
          {/* report section end */}

          {/* rent section start  */}
          <Accordion
            open={open === 3}
            icon={
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`mx-auto h-4 w-4 transition-transform ${open === 2 ? "rotate-180" : ""
                  }`}
              />
            }
          >
            <ListItem className="hover:bg-cyan-50 py-1 " selected={open === 2}>
              <AccordionHeader
                onClick={() => handleOpen(3)}
                className="border-b-0 p-2 flex items-center justify-start gap-3"
              >
                <div>
                  <i class="fa-regular fa-briefcase fs-5" style={{ color: "#74C0FC" }}></i>
                  {/* <PresentationChartBarIcon className="h-5 w-5" /> */}
                </div>
                <Link className="link-underline link-underline-opacity-0 text-dark">
                  {" "}
                  Rent{" "}
                </Link>
              </AccordionHeader>
            </ListItem>
            <AccordionBody className="py-1">
              <List className="p-0">
                <ListItem className="hover:text-cyan-500 py-2 font-semibold">
                  <Link
                    to={"rent"}
                    className="link-underline link-underline-opacity-0 text-dark"
                  >
                    {" "}
                    View all Charges
                  </Link>
                </ListItem>
                <ListItem className="hover:text-cyan-500 py-2 font-semibold">
                  <Link
                    to={"deposit"}
                    className="link-underline link-underline-opacity-0 text-dark"
                  >
                    {" "}
                    View All Deposits{" "}
                  </Link>
                </ListItem>
                <ListItem className="hover:text-cyan-500 py-2 font-semibold">
                  <Link to={"viewchange"} className="link-underline link-underline-opacity-0 text-dark" > Add Late fees rules </Link>
                </ListItem>
                <ListItem className="hover:text-cyan-500 py-2 font-semibold">
                  <Link to={"viewrentroll"} className="link-underline link-underline-opacity-0 text-dark" > View Rent Roll </Link>
                </ListItem>
                {/* <ListItem className="hover:text-cyan-500 py-2 font-semibold">
                  <Link
                    to={"maintenance"}
                    className="link-underline link-underline-opacity-0 text-dark"
                  >
                    {" "}
                    Maintenance{" "}
                  </Link>
                </ListItem> */}
              </List>
            </AccordionBody>
          </Accordion>
          {/* rent section start  */}

          {/* Renters section start  */}
          <Accordion
            open={open === 4}
            icon={
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`mx-auto h-4 w-4 transition-transform ${open === 2 ? "rotate-180" : ""
                  }`}
              />
            }
          >
            <ListItem className="hover:bg-cyan-50 py-1 " selected={open === 2}>
              <AccordionHeader
                onClick={() => handleOpen(4)}
                className="border-b-0 p-2 flex items-center justify-start gap-3"
              >
                <div>
                <i class="fa-regular fa-user fs-5" style={{color: "#74C0FC"}}></i>
                  {/* <PresentationChartBarIcon className="h-5 w-5" /> */}
                </div>
                <Link className="link-underline link-underline-opacity-0 text-dark">
                  {" "}
                  Renters{" "}
                </Link>
              </AccordionHeader>
            </ListItem>
            <AccordionBody className="py-1">
              <List className="p-0">
                <ListItem className="hover:text-cyan-500 py-2 font-semibold">
                  <Link
                    to={"Viewallrenters"}
                    className="link-underline link-underline-opacity-0 text-dark"
                  >  Create Request
                  </Link>
                </ListItem>
               
              </List>
            </AccordionBody>
          </Accordion>
          {/* Renters section end   */}

          {/* Maintenance section start  */}
          <Accordion
            open={open === 5}
            icon={
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`mx-auto h-4 w-4 transition-transform ${open === 2 ? "rotate-180" : ""
                  }`}
              />
            }
          >
            <ListItem className="hover:bg-cyan-50 py-1 " selected={open === 2}>
              <AccordionHeader
                onClick={() => handleOpen(5)}
                className="border-b-0 p-2 flex items-center justify-start gap-3"
              >
                <div>
                <i class="fa-regular fa-plug-circle-check fs-5" style={{color: "#74C0FC"}}></i>
                  {/* <PresentationChartBarIcon className="h-5 w-5" /> */}
                </div>
                <Link className="link-underline link-underline-opacity-0 text-dark">
                  {" "}
                  Maintenance{" "}
                </Link>
              </AccordionHeader>
            </ListItem>
            <AccordionBody className="py-1">
              <List className="p-0">
                <ListItem className="hover:text-cyan-500 py-2 font-semibold">
                  <Link
                    to={"createRequest"}
                    className="link-underline link-underline-opacity-0 text-dark"
                  >
                    {" "}
                    Create Request{" "}
                  </Link>
                </ListItem>
                <ListItem className="hover:text-cyan-500 py-2 font-semibold">
                  <Link
                    to={"requset"}
                    className="link-underline link-underline-opacity-0 text-dark"
                  >
                    {" "}
                    View all request{" "}
                  </Link>
                </ListItem>
              </List>
            </AccordionBody>
          </Accordion>
          {/* Maintenance section end   */}

          {/* Task section start  */}
          <Accordion
            open={open === 6}
            icon={
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`mx-auto h-4 w-4 transition-transform ${open === 2 ? "rotate-180" : ""
                  }`}
              />
            }
          >
            <ListItem className="hover:bg-cyan-50 py-1 " selected={open === 2}>
              <AccordionHeader
                onClick={() => handleOpen(6)}
                className="border-b-0 p-2 flex items-center justify-start gap-3"
              >
                <div>
                <i class="fa-regular fa-list-check fs-5" style={{color: "#74C0FC"}}></i>
                  {/* <PresentationChartBarIcon className="h-5 w-5" /> */}
                </div>
                <Link className="link-underline link-underline-opacity-0 text-dark">
                  {" "}
                  Task {" "}
                </Link>
              </AccordionHeader>
            </ListItem>
            <AccordionBody className="py-1">
              <List className="p-0">
                <ListItem className="hover:text-cyan-500 py-2 font-semibold">
                  <Link
                    to={"task"}
                    className="link-underline link-underline-opacity-0 text-dark"
                  >
                    Add Task
                  </Link>
                </ListItem>
                <ListItem className="hover:text-cyan-500 py-2 font-semibold">
                  <Link
                    to={"viewtask"}
                    className="link-underline link-underline-opacity-0 text-dark"
                  >
                    View all Tasks
                  </Link>
                </ListItem>
              </List>
            </AccordionBody>
          </Accordion>
          {/* Task section end   */}

          <ListItem className=" hover:bg-cyan-50 ms-2 py-2 font-semibold">
            <ListItemPrefix>
            <i class="fa-regular fa-book me-2 fs-5" style={{color: "#74C0FC"}}></i>
              {/* <UserCircleIcon className="h-5 w-5 ml-2 " /> */}
            </ListItemPrefix>
            <Link to={"addbox"} className="link-underline link-underline-opacity-0 text-dark">
              AddBox
            </Link>
          </ListItem>
        </List>
      </Card>
    </>
  );
}

export default SideBar;
