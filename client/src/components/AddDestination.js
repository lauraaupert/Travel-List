import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import DestinationForm from "./DestinationForm";

const style = {
    content: {
      width: 700,
      height: 500,
      borderStyle: "outset",
      overflow: "scroll",
      background: "rgb(255,255,255,0.8)",
    },
  };


function AddDestination() {


  return(
    <motion.div 
    // animate={{ opacity: isVisible ? 1 : 0 }} 
    initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
      drag
      dragConstraints={{
        top: -1000,
        left: -1000,
        right: 1000,
        bottom: 1000,
      }}
      className="container"
      style={style.content}>
          <DestinationForm />
    </motion.div>

  )
    }

export default AddDestination;