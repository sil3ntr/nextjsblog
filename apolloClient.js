import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient ({
    uri: "https://api-ap-southeast-2.hygraph.com/v2/clcsk0yl91ihs01ur221uezwq/master",
    cache: new InMemoryCache(),
});

export default client;