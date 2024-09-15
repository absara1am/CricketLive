package com.absara1am.cricketlive.controllers;

import com.absara1am.cricketlive.entities.Match;
import com.absara1am.cricketlive.services.MatchService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/match")
public class MatchController {

	@Autowired
	private MatchService matchService;

	// api for getting live matches
	@GetMapping("/live")
	public ResponseEntity<?> getLiveMatchScores() throws InterruptedException {
		System.out.println("getting live match");
		return new ResponseEntity<>(this.matchService.getLiveMatchScores(), HttpStatus.OK);
	}

	@GetMapping("/point-table")
	public ResponseEntity<?> getCWC2023PointTable() {
		return new ResponseEntity<>(this.matchService.getCWC2023PointTable(), HttpStatus.OK);
	}

	@GetMapping
	public ResponseEntity<List<Match>> getAllMatches() {
		return new ResponseEntity<>(this.matchService.getAllMatches(), HttpStatus.OK);
	}
}
