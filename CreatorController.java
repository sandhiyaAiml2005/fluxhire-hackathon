package com.flixhire.controller;
import com.flixhire.model.Creator;
import com.flixhire.service.CreatorService;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.Map;
@RestController @RequestMapping("/api")
@CrossOrigin(origins="*")
public class CreatorController {
 private final CreatorService service;
 public CreatorController(CreatorService service){this.service=service;}
 @GetMapping("/creators")
 public List<Creator> creators(@RequestParam(required=false)String search,@RequestParam(required=false)String specialization,
 @RequestParam(required=false)String tool,@RequestParam(required=false)String format,
 @RequestParam(required=false,defaultValue="match")String sort){return service.find(search,specialization,tool,format,sort);}
 @GetMapping("/creators/{id}") public Creator creator(@PathVariable Long id){return service.get(id);}
 @GetMapping("/health") public Map<String,String> health(){return Map.of("status","UP","service","FLIXHIRE");}
}