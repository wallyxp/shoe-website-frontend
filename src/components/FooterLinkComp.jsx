const FooterLinkComp = ({title,links}) =>{
    return(
        <div className={"text-white pr-12"}>
            <h1 className={"py-4 font-montserrat text-xl font-bold"}>{title}</h1>
            <ul>
                {links.map((link, index)=>(
                    <a href={link.link} key={index}>
                      <li className={"py-1 text-sm font-montserrat"}>
                          {link.name}
                      </li>
                    </a>
                ))}
            </ul>
        </div>
    )
}

export default FooterLinkComp