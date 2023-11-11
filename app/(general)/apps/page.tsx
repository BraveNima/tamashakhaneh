/**
 * appsPage renders the page containing download options for apps.
 * It maps over the appsData array from constants to generate Downloadoption
 * components. The page has a flex container layout and bg-cover styling.
 *
 */
import { Downloadoption } from "@/components";
import { appsData } from "@/constants/general";

const appsPage = () => {
  return (
    <div className="mt-[60px] flex flex-wrap bg-cover">
      {appsData.map((item) => (
        <Downloadoption key={item.id} title={item.title} desc={item.desc} />
      ))}
    </div>
  );
};

export default appsPage;
