const FetchContributors = async () => {
    const response = await fetch(
        'https://api.github.com/repos/Sharma-Ji-21/component-library/contributors'
    );
    const data = await response.json();
    return data;
};
export default FetchContributors;