function useScrollToTop() {

    function scrollToTop(){
        window.scrollTo(0,0)
    }

    return {scrollToTop};
}

export default useScrollToTop;