import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet-async";

const PageSchema = ({ data }) => {
  if (!data) return null;

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(data)}</script>
    </Helmet>
  );
};

PageSchema.propTypes = {
  data: PropTypes.object.isRequired,
};

export default PageSchema;
