import * as queries from '../src/graphql/queries';
import * as mutations from '../src/graphql/mutations';
import { useEffect, useState } from 'react';
import Amplify, { API, graphqlOperation } from 'aws-amplify'
import awsExports from "../src/aws-exports";
import Nav from '../components/Nav.js';
import Layout from '../components/Layout';
Amplify.configure(awsExports);
export default function Home() {
  const [device, setDevice] = useState({ name: '', description: 'new description', status: 0, quantity: 5, code: 'new code' });
  useEffect(() => {
    // fetchData()
  }, [])

  async function fetchData() {
    try {
      const devices = await API.graphql(graphqlOperation(queries.listDevices));
      console.log(devices.data.listDevices.items);
    } catch (error) {
      console.log(error);
    }
  }
  const handleSubmit = async () => {
    const data = await API.graphql(graphqlOperation(mutations.createDevice, { input: device }))
    console.log(data);
  }
  return (
    // className={styles.container}
    <div >
      <Layout>
        ok
      </Layout>
    </div>
  )
}
