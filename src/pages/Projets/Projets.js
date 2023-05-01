import './Projets.css';
import React, { useState } from 'react';
import {ProjetsData} from '../../ProjetsData';
import { useNavigate } from 'react-router-dom';
import {ProjetsDataEntreprise} from '../../ProjetsDataEntreprise';


function Projects() {

    const navigate = useNavigate();
    return (
        <div className="wrapper">
            <h1>Projet à l'école</h1>
            <div className="grid">
                {
                    ProjetsData && ProjetsData.map(record => {
                        return (
                            <>
                                <div className="card" key={record.id}>
                                    <div className="titleCard" style={{backgroundImage: `url("${record.img}")` }}>
                                        <h1 className="title2">{record.titre}</h1>
                                    </div>
                                    <div className="descCard">
                                        <p>{record.client}</p>
                                        <p className="desc">{record.descriptionCourte}</p>
                                        <div className="tags">
                                            Mots clées:
                                            {record.tags.map( data => {
                                                return (
                                                    <div className="tag" data-tag={data.libelle}>
                                                    {data.libelle}
                                                </div>
                                                );
                                            })}
                                        </div>
                                        <a className="link1" onClick={()=>{
                                            navigate(`/project/${record.id}`)
                                        }}>
                                            <span className="linkInner1">Voir</span>
                                        </a>
                                    </div>
                                </div>
                            </>
                        );
                    })
                }
            </div>

            <h1 className="mt-10">Projet en entreprise</h1>
            <div className="grid">
                {
                    ProjetsDataEntreprise && ProjetsDataEntreprise.map(record => {
                        return (
                            <>
                                <div className="card" key={record.id}>
                                    <div className="titleCard" style={{backgroundImage: `url("${record.img}")` }}>
                                        <h1 className="title2">{record.titre}</h1>
                                    </div>
                                    <div className="descCard">
                                        <p>{record.client}</p>
                                        <p className="desc">{record.descriptionCourte}</p>
                                        <div className="tags">
                                            Mots clées:
                                            {record.tags.map( data => {
                                                return (
                                                    <div className="tag" data-tag={data.libelle}>
                                                        {data.libelle}
                                                    </div>
                                                );
                                            })}
                                        </div>
                                        <a className="link1" onClick={()=>{
                                            navigate(`/projectEntreprise/${record.id}`)
                                        }}>
                                            <span className="linkInner1">Voir</span>
                                        </a>
                                    </div>
                                </div>
                            </>
                        );
                    })
                }
            </div>
        </div>
    );
}

export default Projects;