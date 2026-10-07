package com.flixhire.model;
import java.util.List;
public class Creator {
 public Long id; public String name; public String role; public String specialization;
 public List<String> tools; public List<String> formats; public double rating; public double rate;
 public int match; public boolean verified; public String description; public String workflow;
 public Creator(Long id,String name,String role,String specialization,List<String> tools,List<String> formats,
 double rating,double rate,int match,boolean verified,String description,String workflow){
  this.id=id;this.name=name;this.role=role;this.specialization=specialization;this.tools=tools;this.formats=formats;
  this.rating=rating;this.rate=rate;this.match=match;this.verified=verified;this.description=description;this.workflow=workflow;
 }
}