import _ from "lodash";
import React from "react";
import "./index.css"

export default ({ topic }) => <p className="topic">{_.toUpper(topic)}</p>