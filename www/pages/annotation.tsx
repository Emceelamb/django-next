import Layout from "../components/Layout";
import { TokenAnnotator, TextAnnotator } from "react-text-annotate";
import { useState } from "react";

const TAG_COLORS = {
  ORG: '#00ffa2',
  PERSON: '#84d2ff',
}

const Card = ({ children }) => (
  <div
    style={{
      boxShadow: "0 2px 4px rgba(0,0,0,.1)",
      margin: 6,
      maxWidth: 500,
      padding: 16,
    }}
  >
    {children}
  </div>
);

const AnnotationPage = (): React.ReactElement => {
  const TEXT =
    "a co-host for the first time : The rapper Cardi B , who just released her first album";

  const [state, setState] = useState({
    value: [{ start: 17, end: 19, tag: "PERSON" }],
    tag: "PERSON",
  });


  const handleChange = value => {
    setState({value})
  }

  const handleTagChange = e => {
    setState({tag: e.target.value})
  }

  return (
    <Layout>
      <h1>Annotation</h1>
      <Card>
        {/* <select onChange={this.handleTagChange} value={this.state.tag}>
              <option value="ORG">ORG</option>
              <option value="PERSON">PERSON</option>
            </select> */}

        <TextAnnotator
          style={{
            maxWidth: 500,
            lineHeight: 1.5,
          }}
          content={TEXT}
          value={state.value}
          onChange={(value) => setState({ value })}
          getSpan={(span) => ({
            ...span,
            tag: state.tag,
            color: TAG_COLORS[state.tag],
          })}
        />
      </Card>
    </Layout>
  );
};

export default AnnotationPage;
