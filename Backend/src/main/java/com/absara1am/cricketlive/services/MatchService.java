package com.absara1am.cricketlive.services;

import java.util.List;

import com.absara1am.cricketlive.entities.Match;

public interface MatchService {

	List<Match> getLiveMatchScores();

	List<List<String>> getCWC2023PointTable();

	List<Match> getAllMatches();

}
