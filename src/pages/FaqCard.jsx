import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {  Collapse,Typography } from '@material-tailwind/react';
const FaqCard = () => {
    const [open, setOpen] = useState(false);
    const toggleOpen = () => setOpen(cur => !cur);
    return (
        <div className="faq">
            <h4 className="d-flex align-items-center justify-content-between p-2">
              <Link className="text-decoration-none" to="/exam"
                >Lorem, ipsum dolor.</Link>
              <span onClick={toggleOpen} className="material-symbols-outlined pointer-event">
                expand_more
              </span>
            </h4>
            <Collapse open={open}>
        <Typography className="p-2">
          Use our Tailwind CSS collapse for your website. You can use if for
          accordion, collapsible items and much more.
        </Typography>
  </Collapse>

          </div>
    );
}

export default FaqCard;
