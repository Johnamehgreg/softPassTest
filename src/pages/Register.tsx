import { Select } from "@chakra-ui/react";
import React, { useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import softPass from "../assets/image/softpassSVG 3.png";
import AppLoader from "../components/AppComponent/AppLoader";
import TabsIndicator from "../components/login/TabsIndicator";
import EyeSlashIcon from "../components/svg-icons/EyeSlashIcon";
import FullScreenWidget from "../components/widget/FullScreenWidget";
import HeroWidget from "../components/widget/HeroWidget";
import { country } from "../constanst/country";
import { useSignUpHook } from "../hooks/auth/signUpHook";

interface Props { }

function Register(props: Props) {
  const { } = props;
  const newPassword = useRef<any>();
  const confirmPassword = useRef<any>();
  const [list, setlist] = useState(country);

  //Variables
  const [currentTab, setCurrentTab] = useState(1);
  const [proceedToSubmit, setProceedToSubmit] = useState(false);
  const [matchPassword, setMatchpassword] = useState(false);
  const [initPassword, setNewPassword] = useState(true);
  const [isLoading, setisLoading] = useState(false);
  const [confirmInitpassword, setConfirmpassword] = useState(false);
  const [dropdownToggleCountry, setDropdownToggleCountry] = useState(false);
  const [proceedFromDropDown, setProceedFromDropDown] = useState(false);

  const [userInfo, setUserinfo] = useState({
    fullName: "",
    businessname: "",
    workEmail: "",
    currentJob: "",
    aboutUs: "",
    product: "",
    newPassword: "",
    confirmPassword: "",
    country: "",
  });

  const { submit } = useSignUpHook({ setisLoading });
  //Functions
  const checkingAllDropdownValue = () => {
    if (currentTab != 2) return false;

    let getvalues =
      userInfo?.product?.trim() == "" ||
      userInfo?.aboutUs?.trim() == "" ||
      userInfo?.currentJob?.trim() == "";
    if (getvalues) setProceedFromDropDown(true);
    else setProceedFromDropDown(false)
    return getvalues;
  };
  const setPasswordToUser = (data: any) => {
    setUserinfo({ ...userInfo, ...data });
    setMatchpassword(
      !(newPassword.current.value == confirmPassword.current.value)
    );
  };
  const moveTabs = () => {
    currentTab < 3 ? setCurrentTab(currentTab + 1) : setProceedToSubmit(true);
  };
  const toggleInput = (val: string) => {
    switch (val) {
      case "new-password":
        setNewPassword(!initPassword);
        break;

      case "confirm-password":
        setConfirmpassword(!confirmInitpassword);
        break;
    }
  };
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // alert('chan')

    let data = {
      first_name: userInfo.fullName,
      last_name: userInfo.fullName,
      email: userInfo.workEmail,
      product: userInfo.product,
      current_job_role: userInfo.currentJob,
      country: userInfo.country,
      hear_about_us: userInfo.aboutUs,
      password: userInfo.newPassword,
      business_name: userInfo.businessname,
    };

    if (currentTab < 3) {
      moveTabs();
    } else if (currentTab === 3) {
      submit(data);
    }

    if (!proceedToSubmit) return;

    if (matchPassword) return null;
  };

  const [otherInfo, setOtherInfo] = useState([
    {
      name: "Product",
      options: [
        "Banking and insurance",
        "Consumer payments",
        "Lending",
        "Wealth management",
        "Others",
      ],
    },
    {
      name: "Current role",
      options: ["Software Engineer", "Product Manager", "Founder", "Others"],
    },
    {
      name: "How did you hear about us",
      options: ["Social media", "Email", "Newsletter", "Website", "Others"],
    },
  ]);

  const updateUserInfo = (val: string, type: string) => {
    switch (type) {
      case "Product":
        setUserinfo({ ...userInfo, product: val });
        break;
      case "Current role":
        setUserinfo({ ...userInfo, currentJob: val });
        break;
      case "How did you hear about us":
        setUserinfo({ ...userInfo, aboutUs: val });
        break;
    }
    console.log(userInfo);
  };

  const handleCountry = (e: any) => {
    setDropdownToggleCountry(true);
    let text = e.target.value;

    if (text.trim().length === 0) {
      setDropdownToggleCountry(!dropdownToggleCountry);
    }

    const newList = country.filter((post: any) => {
      if (post.name.common.toLowerCase().includes(text.toLowerCase())) {
        return post;
      }
    });

    setlist(newList);
  };

  return (
    <HeroWidget>
      <AppLoader isLoading={isLoading} />
      <FullScreenWidget>
        <div className="py-12 flex justify-center">
          <img alt="" src={softPass}></img>
        </div>
        <div className="my-8 flex justify-center w-full">
          <TabsIndicator
            setCurrentTab={setCurrentTab}
            initial_tab={currentTab}
          />
        </div>

        <form
          onSubmit={onSubmit}
          className="bg-white mb-24 w-full login-input-container rounded-lg overflow-hidden"
        >
          <h3>
            {currentTab <= 2 && (
              <>
                <span className=" text-softpasspurple-500">Let’s get you </span>
                <span className=" text-softpasspurple-300">started</span>
              </>
            )}
            {currentTab > 2 && (
              <>
                <span className=" text-softpasspurple-500">
                  Create your own{" "}
                </span>
                <span className=" text-softpasspurple-300">password</span>
              </>
            )}
          </h3>
          {currentTab == 1 && (
            <>
              <div className="input-contain">
                <input
                  value={userInfo.fullName}
                  onChange={(e) => {
                    setUserinfo({ ...userInfo, fullName: e.target.value });
                  }}
                  required
                  type="text"
                  placeholder="Full name"
                ></input>
              </div>
              <div className="input-contain">
                <input
                  value={userInfo.businessname}
                  onChange={(e) => {
                    setUserinfo({ ...userInfo, businessname: e.target.value });
                  }}
                  required
                  type="text"
                  placeholder="Business name"
                ></input>
              </div>
              <div className="input-contain">
                <input
                  value={userInfo.workEmail}
                  onChange={(e) => {
                    setUserinfo({ ...userInfo, workEmail: e.target.value });
                  }}
                  required
                  type="email"
                  placeholder="Work email"
                ></input>
              </div>
            </>
          )}

          {currentTab === 2 && (
            <>
              <>
                {otherInfo.map((item: any, index: number) => {
                  return (
                    <div className="input-contain">
                      <Select
                        placeholder={item.name}
                        onChange={(e) => {
                          updateUserInfo(e.target.value, item.name);
                        }}
                      >
                        {item.options.map((item: any, index: number) => {
                          return <option value={item}>{item}</option>;
                        })}
                      </Select>
                    </div>
                  );
                })}
              </>
              <div className="input-contain relative">
                <input
                  value={userInfo.country}
                  onChange={(e) => {
                    handleCountry(e);
                    setUserinfo({ ...userInfo, country: e.target.value });
                  }}
                  required
                  type="text"
                  placeholder="Country"
                ></input>

                {dropdownToggleCountry && (
                  <div className="contry-drop-down px-4">
                    {list.map(({ name, flags }, index) => {
                      return (
                        <button
                          onClick={() => {
                            setUserinfo({ ...userInfo, country: name?.common });
                            setDropdownToggleCountry(!dropdownToggleCountry);
                          }}
                          key={`${name?.common} ${index}`}
                          className="country-dropdown-item pointer"
                        >
                          <span className="country-flag-cont">
                            <img src={flags.png} alt="" className="flag-img" />
                          </span>
                          <p>{name?.common}</p>
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
              {proceedFromDropDown && (
                <span className="text-sm text-red-600 w-full block px-6 md:px-10">
                  Select all filed to proceed
                </span>
              )}
            </>
          )}

          {currentTab === 3 && (
            <>
              <div className="input-contain">
                <input
                  value={userInfo.newPassword}
                  type={initPassword ? "password" : "text"}
                  onChange={(e) => {
                    setPasswordToUser({ newPassword: e.target.value });
                  }}
                  placeholder="New Password"
                  ref={newPassword}
                ></input>
                <i
                  onClick={() => {
                    toggleInput("new-password");
                  }}
                  className="w-[50px] flex justify-center"
                >
                  {initPassword ? (
                    <EyeSlashIcon width={"20"} />
                  ) : (
                    <EyeSlashIcon width={"20"} />
                  )}
                </i>
              </div>
              <div className="input-contain">
                <input
                  type={!confirmInitpassword ? "password" : "text"}
                  onChange={(e) => {
                    setPasswordToUser({ confirmPassword: e.target.value });
                  }}
                  value={userInfo.confirmPassword}
                  placeholder="Confirm Password"
                  ref={confirmPassword}
                ></input>
                <i
                  onClick={() => {
                    toggleInput("confirm-password");
                  }}
                  className="w-[50px] flex justify-center"
                >
                  {confirmInitpassword ? (
                    <EyeSlashIcon width={"20"} />
                  ) : (
                    <EyeSlashIcon width={"20"} />
                  )}
                </i>
              </div>
              {matchPassword && (
                <div className="text-[13px] text-red-500 flex justify-start w-full pl-1">
                  Confirm password and new password do not match
                </div>
              )}
            </>
          )}

          <div className="w-full text-center py-3 garrif">
            {currentTab < 3 && (
              <button type="submit" className="next-button">
                Next
              </button>
            )}
            {currentTab === 3 && (
              <button type="submit" className="next-button">
                Submit{" "}
              </button>
            )}
          </div>

          <div className="w-full text-center py-4 garrif pb-8">
            Already have an account?{" "}
            <NavLink
              className="text-softpasspurple-300 font-semibold"
              to="/login"
            >
              Sign in
            </NavLink>
          </div>

          <p className="text-[14px] bg-gray-100 text-center w-full flex justify-center py-4">
            <p className="w-8/12 garrif text-[13px]">
              <span className="text-gray-500">
                By signing up, you agree to our Terms,{" "}
              </span>
              Data Policy and Cookies Policy.
            </p>
          </p>
        </form>

        <br />
        <br />
        <br />
      </FullScreenWidget>
    </HeroWidget>
  );
}

export default Register;
