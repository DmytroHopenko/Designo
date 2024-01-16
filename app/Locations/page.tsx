import React from "react";
import classes from "./index.module.css";
import MetaContact from "@/components/MetaContact/MetaContact";

const page = () => {
  return (
    <main className={classes.main}>
      <section className={classes.wrap_locations}>
        <div className={classes.location}>
          <div className={classes.wrap_information}>
            <h1 className={classes.location_title}>Canada</h1>
            <div className={classes.wrap_detail}>
              <p className={classes.location_text}>
                <span className={classes.bold_text}>Designo UK Office</span><br />
                13 Colorado Way <br />
                Rhyd-y-fro SA8 9GA
              </p>
              <p className={classes.location_text}>
                <span className={classes.bold_text}>Contact</span> <br />
                P : 078 3115 1400 <br />
                M : contact@designo.uk
              </p>
            </div>
          </div>
          <div className={`${classes.wrap_map} ${classes.canada}`}></div>
        </div>
        <div className={classes.location}>
          <div className={classes.wrap_information}>
            <h1 className={classes.location_title}>Australia</h1>
            <div className={classes.wrap_detail}>
              <p className={classes.location_text}>
                <span className={classes.bold_text}>Designo AU Office</span><br />
                19 Balonne Street <br />
                New South Wales 2443
              </p>
              <p className={classes.location_text}>
                <span className={classes.bold_text}>Contact</span><br />
                P : (02) 6720 9092 <br />
                M : contact@designo.au
              </p>
            </div>
          </div>
          <div className={`${classes.wrap_map} ${classes.australia}`}></div>
        </div>
        <div className={classes.location}>
          <div className={classes.wrap_information}>
            <h1 className={classes.location_title}>United Kingdom</h1>
            <div className={classes.wrap_detail}>
              <p className={classes.location_text}>
                <span className={classes.bold_text}>Designo UK Office</span><br />
                13 Colorado Way <br />
                Rhyd-y-fro SA8 9GA
              </p>
              <p className={classes.location_text}>
                <span className={classes.bold_text}>Contact</span><br />
                P : 078 3115 1400 <br /> 
                M : contact@designo.uk
              </p>
            </div>
          </div>
          <div className={`${classes.wrap_map} ${classes.uk}`}></div>
        </div>
      </section>
      <MetaContact />
    </main>
  );
};

export default page;
