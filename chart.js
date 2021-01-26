chart = (data, id) => {
    pie = d3.pie().sort(null).value(d => d.value)

    width = 200
    height = 200
    color = d3.scaleOrdinal()
        .domain(data.map(d => d.name))
        .range(d3.quantize(t => d3.interpolateSpectral(t * 0.8 + 0.1), data.length).reverse())

    arc = d3.arc()
        .innerRadius(0)
        .outerRadius(Math.min(width, height) / 2 - 1)

    arcLabel = () => {
        const radius = Math.min(width, height) / 2 * 0.7
        return d3.arc().innerRadius(radius).outerRadius(radius)
    }

    const arcs = pie(data)
    const svg = d3.select(id).attr("viewBox", [-width / 2, -height / 2, width, height])

    // draw circle
    svg.append("g")
        .attr("stroke", "white")
        .selectAll("path")
        .data(arcs)
        .join("path")
        .attr("fill", d => color(d.data.name))
        .attr("d", arc)

    // draw text
    svg.append("g")
        .attr("font-family", "Helvetica")
        .attr("font-size", 8)
        .attr("text-anchor", "middle")
        .selectAll("text")
        .data(arcs)
        .join("text")
        .attr("transform", d => `translate(${arcLabel().centroid(d)})`)
        .call(text => text.append("tspan")
            .attr("y", "-0.4em")
            .attr("font-weight", "bold")
            .text(d => d.data.name))
}


chartLang = () => {
    data = [
        { name: "JavaScript", value: "10" },
        { name: "PHP7系", value: "10" },
        { name: "HTML", value: "10" },
        { name: "Css(Sass)", value: "5" },
        { name: "Python", value: "3" },
        { name: "Ruby", value: "3" },
    ]
    chart(data, "#chart-lang")
}

chartLib = () => {
    data = [
        { name: "React", value: "10" },
        { name: "Laravel", value: "10" },
        { name: "Jest", value: "8" },
        { name: "PHPUnit", value: "8" },
        { name: "GatsbyJS", value: "8" },
        { name: "Bootstrap", value: "5" },
        { name: "Bulma", value: "5" },
    ]
    chart(data, "#chart-lib")
}

chartDev = () => {
    data = [
        { name: "Docker", value: "10" },
        { name: "DockerCompose", value: "10" },
        { name: "Apache", value: "5" },
        { name: "Nginx", value: "2" },
    ]
    chart(data, "#chart-dev")
}

chartOther = () => {
    data = [
        { name: "MySQL", value: "10" },
        { name: "WordPress", value: "8" },
        { name: "Selenium", value: "8" },
        { name: "GIMP", value: "5" },
        { name: "Inkscape", value: "5" },
    ]
    chart(data, "#chart-other")
}