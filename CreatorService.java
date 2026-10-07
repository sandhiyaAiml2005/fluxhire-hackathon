package com.flixhire.service;
import com.flixhire.model.Creator;
import org.springframework.stereotype.Service;
import java.util.*;
import java.util.stream.Collectors;
@Service
public class CreatorService {
 private final List<Creator> creators=List.of(
 new Creator(1L,"Aanya Rao","AI Filmmaker","AI Filmmaking",List.of("Runway Gen-3","Kling"),List.of("Video"),4.9,120,98,true,"Cinematic brand films and product narratives.","Storyboarding, image-to-video and controlled motion."),
 new Creator(2L,"Vikram Shah","Generative Designer","Generative Design",List.of("Midjourney","Adobe Firefly"),List.of("Image"),4.8,85,94,true,"Campaign key visuals and fashion concepts.","Concept development and visual consistency."),
 new Creator(3L,"Maya Chen","AI Animator","AI Animation",List.of("Runway Gen-3","Stable Diffusion","ComfyUI"),List.of("3D / Animation","Video"),4.9,140,92,true,"Stylized animation and motion design.","Node workflows, animation and production handoff."),
 new Creator(4L,"Arjun Menon","Product Ads Creator","Product Ads",List.of("Kling","Midjourney"),List.of("Video","Image"),4.7,70,89,false,"Performance-focused product ads.","Short-form product storytelling."),
 new Creator(5L,"Zoya Khan","AI Art Director","Generative Design",List.of("Midjourney","Stable Diffusion","FLUX"),List.of("Image","3D / Animation"),4.9,110,91,true,"Art direction and visual identity.","Concept systems and generative workflows."),
 new Creator(6L,"Rohan Iyer","AI Video Specialist","AI Filmmaking",List.of("Runway Gen-3","Kling","ComfyUI"),List.of("Video"),4.6,65,87,true,"Fast-turnaround ads and explainers.","Rapid video iteration and social-first production.")
 );
 public List<Creator> find(String search,String specialization,String tool,String format,String sort){
  String q=search==null?"":search.toLowerCase().trim();
  List<Creator> r=creators.stream()
   .filter(c->q.isEmpty()||(c.name+" "+c.role+" "+c.specialization+" "+String.join(" ",c.tools)).toLowerCase().contains(q))
   .filter(c->specialization==null||specialization.isBlank()||c.specialization.equalsIgnoreCase(specialization))
   .filter(c->tool==null||tool.isBlank()||c.tools.stream().anyMatch(t->t.equalsIgnoreCase(tool)))
   .filter(c->format==null||format.isBlank()||c.formats.stream().anyMatch(f->f.equalsIgnoreCase(format)))
   .collect(Collectors.toList());
  Comparator<Creator> cmp;
  if("rating".equalsIgnoreCase(sort)) cmp=Comparator.comparingDouble(c->c.rating);
  else if("rate".equalsIgnoreCase(sort)) cmp=Comparator.comparingDouble(c->-c.rate);
  else cmp=Comparator.comparingInt(c->c.match);
  return r.stream().sorted(cmp.reversed()).toList();
 }
 public Creator get(Long id){return creators.stream().filter(c->c.id.equals(id)).findFirst().orElse(null);}
}